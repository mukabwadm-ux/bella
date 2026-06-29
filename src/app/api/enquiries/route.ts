import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Service role client — can write to enquiries table
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, travel_date, group_size, message, tour_slug, subject, source } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error: dbError } = await supabaseAdmin
      .from("enquiries")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        travel_date: travel_date || null,
        group_size: group_size || "2",
        message: message || "",
        tour_slug: tour_slug || null,
        subject: subject || "",
        source: source || "tour_page",
        status: "new",
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save enquiry. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (if Resend API key is configured)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await sendEmailNotification({ name, email, phone, travel_date, group_size, message, tour_slug, subject, enquiryId: data?.id });
      } catch (emailErr) {
        // Email failure doesn't fail the request — data is already saved
        console.error("Email notification failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 201 });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone: string;
  travel_date?: string;
  group_size?: string;
  message?: string;
  tour_slug?: string;
  subject?: string;
  enquiryId?: string;
}) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const tourInfo = data.tour_slug
    ? `<p><strong>Package:</strong> ${data.tour_slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</p>`
    : "";

  const subjectLine = data.subject
    ? `New Enquiry — ${data.subject}`
    : data.tour_slug
    ? `New Enquiry — ${data.tour_slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}`
    : "New Bella Safaris Enquiry";

  // Notify the reservations team
  await resend.emails.send({
    from: "Bella Safaris Website <noreply@bellasafaris.com>",
    to: ["reservations@bellasafaris.com"],
    subject: subjectLine,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B3D2E; padding: 20px; text-align: center;">
          <h1 style="color: #D98200; margin: 0; font-size: 24px;">New Safari Enquiry</h1>
          <p style="color: #ffffff99; margin: 5px 0 0;">Bella Safaris Website</p>
        </div>

        <div style="background: #FAF7F0; padding: 30px;">
          <h2 style="color: #0B3D2E; border-bottom: 2px solid #E4E0D6; padding-bottom: 10px;">Contact Details</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/${data.phone?.replace(/\D/g, '')}">${data.phone}</a></p>

          <h2 style="color: #0B3D2E; border-bottom: 2px solid #E4E0D6; padding-bottom: 10px; margin-top: 25px;">Trip Details</h2>
          ${tourInfo}
          ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
          ${data.travel_date ? `<p><strong>Travel Date:</strong> ${data.travel_date}</p>` : ""}
          ${data.group_size ? `<p><strong>Group Size:</strong> ${data.group_size} people</p>` : ""}
          ${data.message ? `<p><strong>Message:</strong></p><div style="background: #fff; border-left: 3px solid #D98200; padding: 12px 16px; border-radius: 4px;">${data.message}</div>` : ""}

          ${data.enquiryId ? `<p style="color: #5B6B62; font-size: 12px; margin-top: 20px;">Enquiry ID: ${data.enquiryId}</p>` : ""}
        </div>

        <div style="background: #0B3D2E; padding: 15px; text-align: center;">
          <p style="color: #ffffff60; font-size: 12px; margin: 0;">
            Bella Safaris · Rosslyn Riviera Mall, Level 1, Nairobi
          </p>
        </div>
      </div>
    `,
  });

  // Auto-reply to the client
  await resend.emails.send({
    from: "Bella Safaris <reservations@bellasafaris.com>",
    to: [data.email],
    subject: "We've received your safari enquiry — Bella Safaris",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B3D2E; padding: 30px; text-align: center;">
          <h1 style="color: #D98200; margin: 0;">Bella Safaris</h1>
          <p style="color: #ffffff80; margin: 5px 0 0;">East Africa's Trusted Safari Specialists</p>
        </div>

        <div style="background: #FAF7F0; padding: 30px;">
          <h2 style="color: #0B3D2E;">Thank you, ${data.name}!</h2>
          <p style="color: #1C2B23; line-height: 1.6;">
            We have received your safari enquiry and one of our specialists will be in touch
            within <strong>24 hours</strong> to discuss your trip.
          </p>
          ${data.tour_slug ? `
          <div style="background: #E8F0EB; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #0B3D2E;"><strong>Package of interest:</strong></p>
            <p style="margin: 5px 0 0; color: #5B6B62;">${data.tour_slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</p>
          </div>` : ""}
          <p style="color: #1C2B23; line-height: 1.6;">
            In the meantime, feel free to WhatsApp us directly for a faster response:
          </p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="https://wa.me/254700506464"
               style="background: #25D366; color: #fff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block;">
              Chat on WhatsApp
            </a>
          </div>
          <p style="color: #5B6B62; font-size: 14px; line-height: 1.6;">
            <strong>Bella Safaris</strong><br>
            Rosslyn Riviera Mall, Level 1, Nairobi<br>
            📞 +254 700 506 464<br>
            ✉️ reservations@bellasafaris.com
          </p>
        </div>

        <div style="background: #002800; padding: 15px; text-align: center;">
          <p style="color: #ffffff50; font-size: 11px; margin: 0;">
            © ${new Date().getFullYear()} Bella Safaris. All rights reserved.
          </p>
        </div>
      </div>
    `,
  });
}
