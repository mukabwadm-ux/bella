import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
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
