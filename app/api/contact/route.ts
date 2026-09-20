import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message, budget, timeline, honeypot } = body;

    // Spam protection: If honeypot field is filled, return success silently without sending
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Your message was sent successfully!" });
    }

    // Basic server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Please provide a brief message about your project." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL || "abdullahbuilds786@gmail.com";

    // If Resend API key is configured, deliver the email
    if (apiKey) {
      const resend = new Resend(apiKey);

      const emailResult = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        replyTo: email,
        subject: `New Project Enquiry from ${name} [${service ? service.toUpperCase() : "GENERAL"}]`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #fdfdfc; border: 1px solid #e5e5e0; border-radius: 12px; color: #1c1c1c;">
            <div style="border-bottom: 2px solid #80eb34; padding-bottom: 16px; margin-bottom: 20px;">
              <h1 style="font-size: 22px; margin: 0; text-transform: uppercase; letter-spacing: -0.5px;">New Portfolio Enquiry</h1>
              <p style="margin: 4px 0 0 0; color: #6b6b6b; font-size: 14px;">Received from your website contact form</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; color: #767676; width: 140px; font-weight: 600; text-transform: uppercase; font-size: 12px;">Client Name:</td>
                <td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #767676; font-weight: 600; text-transform: uppercase; font-size: 12px;">Client Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2b7a0b; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #767676; font-weight: 600; text-transform: uppercase; font-size: 12px;">Service Requested:</td>
                <td style="padding: 8px 0; color: #111;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #767676; font-weight: 600; text-transform: uppercase; font-size: 12px;">Budget Range:</td>
                <td style="padding: 8px 0; color: #111;">${budget || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #767676; font-weight: 600; text-transform: uppercase; font-size: 12px;">Target Timeline:</td>
                <td style="padding: 8px 0; color: #111;">${timeline || "Not specified"}</td>
              </tr>
            </table>

            <div style="background-color: #f5f5f0; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #767676; letter-spacing: 0.5px;">Message Details:</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 15px; color: #222;">${message}</p>
            </div>

            <p style="font-size: 12px; color: #999; margin: 0; text-align: center;">
              You can reply directly to this email to respond to ${name} (${email}).
            </p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Resend error:", emailResult.error);
        return NextResponse.json(
          { error: emailResult.error.message || "Failed to deliver email through Resend." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: "Your message was sent successfully!" });
    }

    // Fallback: If RESEND_API_KEY is not yet set in .env.local, log and acknowledge
    console.warn("RESEND_API_KEY is not configured in .env.local. Logging contact form submission:", {
      name,
      email,
      service,
      budget,
      timeline,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Message received! (Note: Add RESEND_API_KEY in .env.local to enable live email delivery to your inbox)",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
