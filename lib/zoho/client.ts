// Server-only Zoho Mail client — OAuth self-client token management + send
// email. Never import this from a "use client" component: the client secret
// and refresh token must stay off the browser bundle.
//
// Auth flow: Zoho deprecated static API keys, so this uses a Self Client
// (server-based OAuth app, no interactive login). A refresh token — generated
// once via the Zoho API Console, scoped to ZohoMail.messages.CREATE — is
// exchanged for short-lived access tokens on demand.

const DC = process.env.ZOHO_DC || "com";
const ACCOUNTS_BASE = `https://accounts.zoho.${DC}`;
const MAIL_API_BASE = `https://mail.zoho.${DC}`;

type TokenCache = { accessToken: string; expiresAt: number };

let tokenCache: TokenCache | null = null;
let refreshInFlight: Promise<string> | null = null;

async function fetchAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: requireEnv("ZOHO_REFRESH_TOKEN"),
    client_id: requireEnv("ZOHO_CLIENT_ID"),
    client_secret: requireEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  const res = await fetch(`${ACCOUNTS_BASE}/oauth/v2/token?${params}`, {
    method: "POST",
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.access_token) {
    throw new Error(`Zoho token refresh failed (${res.status}): ${JSON.stringify(body)}`);
  }

  // Refresh a little early so a near-expiry token is never handed out.
  const expiresAt = Date.now() + (body.expires_in ?? 3600) * 1000 - 120_000;
  tokenCache = { accessToken: body.access_token, expiresAt };
  return body.access_token;
}

// Note: on a serverless/edge deploy target this module-scope cache resets on
// every cold start, causing an extra token refresh round-trip per cold start.
// That's a latency cost, not a correctness issue — harmless on a persistent
// Node server (e.g. `next start`).
async function getAccessToken(forceRefresh = false): Promise<string> {
  if (!forceRefresh && tokenCache && tokenCache.expiresAt > Date.now()) {
    return tokenCache.accessToken;
  }
  if (!refreshInFlight) {
    refreshInFlight = fetchAccessToken().finally(() => {
      refreshInFlight = null;
    });
  }
  return refreshInFlight;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

/** Sends a plaintext email through Zoho Mail's Send Email API. */
export async function sendEmail({
  subject,
  content,
  toAddress,
}: {
  subject: string;
  content: string;
  toAddress: string;
}): Promise<void> {
  const accountId = requireEnv("ZOHO_MAIL_ACCOUNT_ID");
  const fromAddress = process.env.ZOHO_FROM_ADDRESS || toAddress;
  const url = `${MAIL_API_BASE}/api/accounts/${accountId}/messages`;

  const post = async (token: string) =>
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromAddress,
        toAddress,
        subject,
        content,
        mailFormat: "plaintext",
      }),
    });

  let token = await getAccessToken();
  let res = await post(token);

  if (res.status === 401) {
    token = await getAccessToken(true);
    res = await post(token);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Zoho sendEmail failed (${res.status}): ${body}`);
  }
}
