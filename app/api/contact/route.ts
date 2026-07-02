import { sendEmail } from "@/lib/zoho/client";
import { required, email, phPhone, validate, type Rules } from "@/lib/forms/validation";

const RULES: Rules = {
  company: [required()],
  person: [required()],
  email: [required(), email()],
  mobile: [phPhone()],
  service: [required()],
};

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (Object.keys(validate(body, RULES)).length > 0) {
    return Response.json({ error: "Invalid form data." }, { status: 400 });
  }

  const mobile = body.mobile ? `+63${body.mobile.replace(/\D/g, "")}` : "—";
  const content = [
    `Company Name: ${body.company}`,
    `Contact Person: ${body.person}`,
    `Email Address: ${body.email}`,
    `Mobile Number: ${mobile}`,
    `Service Needed: ${body.service}`,
    `Message: ${body.message || "—"}`,
  ].join("\n");

  try {
    await sendEmail({
      toAddress: process.env.ZOHO_TO_ADDRESS!,
      subject: `New Contact Inquiry — ${body.company}`,
      content,
    });
  } catch (err) {
    console.error("Zoho contact submission failed:", err);
    return Response.json(
      { error: "We couldn't submit your inquiry. Please try again or call us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
