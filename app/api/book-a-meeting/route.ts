import { sendEmail } from "@/lib/zoho/client";
import { required, email, phPhone, weekdayDate, validate, type Rules } from "@/lib/forms/validation";

const RULES: Rules = {
  name: [required()],
  email: [required(), email()],
  phone: [required(), phPhone()],
  date: [required(), weekdayDate()],
  time: [required()],
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

  const content = [
    `Full Name: ${body.name}`,
    `Email Address: ${body.email}`,
    `Phone Number: +63${body.phone.replace(/\D/g, "")}`,
    `Preferred Date: ${body.date}`,
    `Preferred Time: ${body.time}`,
    `Message: ${body.message || "—"}`,
  ].join("\n");

  try {
    await sendEmail({
      toAddress: process.env.ZOHO_TO_ADDRESS!,
      subject: `New Meeting Request — ${body.name}`,
      content,
    });
  } catch (err) {
    console.error("Zoho meeting request submission failed:", err);
    return Response.json(
      { error: "We couldn't submit your meeting request. Please try again or call us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
