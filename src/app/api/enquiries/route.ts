import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/escape-html";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  // Rate limit: 5 enquiries per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const { allowed } = rateLimit(`enquiry:${ip}`, 5, 60 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { name, email, phone, travel_date, group_size, message, tour_slug, subject, source } = body;

    // Input validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    }
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message && message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

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
      return NextResponse.json({ error: "Failed to save enquiry. Please try again." }, { status: 500 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await sendEmailNotification({ name, email, phone, travel_date, group_size, message, tour_slug, subject, enquiryId: data?.id });
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

async function sendEmailNotification(data: {
  name: string; email: string; phone: string; travel_date?: string;
  group_size?: string; message?: string; tour_slug?: string;
  subject?: string; enquiryId?: string;
}) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Escape all user-supplied values before embedding in HTML
  const safeName    = escapeHtml(data.name);
  const safeEmail   = escapeHtml(data.email);
  const safePhone   = escapeHtml(data.phone);
  const safeMsg     = escapeHtml(data.message);
  const safeSubject = escapeHtml(data.subject);
  const safeTour    = data.tour_slug
    ? escapeHtml(data.tour_slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    : null;

  const subjectLine = data.subject
    ? `New Enquiry — ${safeTour ?? safeSubject}`
    : safeTour
    ? `New Enquiry — ${safeTour}`
    : "New Bella Safaris Enquiry";

  await resend.emails.send({
    from: "Bella Safaris Website <noreply@bellasafaris.com>",
    to: ["info@bellasafaris.com"],
    subject: subjectLine,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0B3D2E;padding:20px;text-align:center;">
          <h1 style="color:#D98200;margin:0;font-size:24px;">New Safari Enquiry</h1>
          <p style="color:#ffffff99;margin:5px 0 0;">Bella Safaris Website</p>
        </div>
        <div style="background:#FAF7F0;padding:30px;">
          <h2 style="color:#0B3D2E;border-bottom:2px solid #E4E0D6;padding-bottom:10px;">Contact Details</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
          <h2 style="color:#0B3D2E;border-bottom:2px solid #E4E0D6;padding-bottom:10px;margin-top:25px;">Trip Details</h2>
          ${safeTour ? `<p><strong>Package:</strong> ${safeTour}</p>` : ""}
          ${safeSubject && !safeTour ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ""}
          ${data.travel_date ? `<p><strong>Travel Date:</strong> ${escapeHtml(data.travel_date)}</p>` : ""}
          ${data.group_size ? `<p><strong>Group Size:</strong> ${escapeHtml(data.group_size)} people</p>` : ""}
          ${safeMsg ? `<p><strong>Message:</strong></p><div style="background:#fff;border-left:3px solid #D98200;padding:12px 16px;border-radius:4px;">${safeMsg}</div>` : ""}
          ${data.enquiryId ? `<p style="color:#5B6B62;font-size:12px;margin-top:20px;">Enquiry ID: ${escapeHtml(data.enquiryId)}</p>` : ""}
        </div>
        <div style="background:#0B3D2E;padding:15px;text-align:center;">
          <p style="color:#ffffff60;font-size:12px;margin:0;">Bella Safaris · Rosslyn Riviera Mall, Level 1, Nairobi</p>
        </div>
      </div>`,
  });

  await resend.emails.send({
    from: "Bella Safaris <info@bellasafaris.com>",
    to: [data.email],
    subject: "We've received your safari enquiry — Bella Safaris",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0B3D2E;padding:30px;text-align:center;">
          <h1 style="color:#D98200;margin:0;">Bella Safaris</h1>
          <p style="color:#ffffff80;margin:5px 0 0;">East Africa's Trusted Safari Specialists</p>
        </div>
        <div style="background:#FAF7F0;padding:30px;">
          <h2 style="color:#0B3D2E;">Thank you, ${safeName}!</h2>
          <p style="color:#1C2B23;line-height:1.6;">
            We have received your safari enquiry and one of our specialists will be in touch
            within <strong>24 hours</strong> to discuss your trip.
          </p>
          ${safeTour ? `<div style="background:#E8F0EB;border-radius:8px;padding:15px;margin:20px 0;"><p style="margin:0;color:#0B3D2E;"><strong>Package of interest:</strong></p><p style="margin:5px 0 0;color:#5B6B62;">${safeTour}</p></div>` : ""}
          <p style="color:#1C2B23;line-height:1.6;">In the meantime, feel free to WhatsApp us directly for a faster response:</p>
          <div style="text-align:center;margin:25px 0;">
            <a href="https://wa.me/254719888008" style="background:#25D366;color:#fff;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:bold;display:inline-block;">Chat on WhatsApp</a>
          </div>
          <p style="color:#5B6B62;font-size:14px;line-height:1.6;">
            <strong>Bella Safaris</strong><br>
            Rosslyn Riviera Mall, Level 1, Nairobi<br>
            +254 719 888 008 / +254 739 888 008<br>
            info@bellasafaris.com
          </p>
        </div>
        <div style="background:#002800;padding:15px;text-align:center;">
          <p style="color:#ffffff50;font-size:11px;margin:0;">© ${new Date().getFullYear()} Bella Safaris. All rights reserved.</p>
        </div>
      </div>`,
  });
}
