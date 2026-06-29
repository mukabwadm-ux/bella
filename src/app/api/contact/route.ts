import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limit: 5 submissions per IP per hour
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const { allowed } = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    // Validate types and lengths
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (typeof message !== "string" || message.trim().length < 5 || message.trim().length > 5000) {
      return NextResponse.json({ error: "Message must be between 5 and 5000 characters." }, { status: 400 });
    }
    if (subject && typeof subject === "string" && subject.length > 200) {
      return NextResponse.json({ error: "Subject is too long." }, { status: 400 });
    }

    const { error } = await supabase.from("contacts").insert([{
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() ?? null,
      subject: subject?.trim() ?? null,
      message: message.trim(),
      status: "new",
    }]);

    if (error) {
      console.error("Contact insert error:", error);
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
