import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const text = `New message from CS+SG website\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;

    // If RESEND_API_KEY is provided, send via Resend. Otherwise, fallback to mailto link response.
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CS+SG Website <onboarding@resend.dev>",
          to: ["cssgunc@gmail.com"],
          subject: subject || "Message from CS+SG site",
          text,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return NextResponse.json({ ok: false }, { status: 500 });
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback: instruct the client to open mailto (keeps UX functional without backend email)
    return NextResponse.json({ ok: true, fallback: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
