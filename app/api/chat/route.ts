import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/chat/knowledge";

export const maxDuration = 30;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "Chat is not configured." },
      { status: 503 }
    );
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!Array.isArray(messages)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = streamText({
    model: openai(process.env.OPENAI_MODEL ?? "gpt-4o-mini"),
    system: SYSTEM_PROMPT,
    // Keep the context bounded for cost/safety.
    messages: await convertToModelMessages(messages.slice(-12)),
  });

  return result.toUIMessageStreamResponse();
}
