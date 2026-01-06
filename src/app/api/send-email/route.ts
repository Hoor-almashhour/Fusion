import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Fusion Website" <${process.env.EMAIL_USER}>`,
    to: "fusion.edu369@gmail.com",
    subject: "New Student Request",
    html: `
      <h3>New Student Request</h3>
      <p><b>Degree:</b> ${data.degree}</p>
      <p><b>Language:</b> ${data.language}</p>
      <p><b>Major:</b> ${data.major}</p>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Notes:</b> ${data.search}</p>
      <p><b>Phone Number:</b> ${data.phone}</p>

    `,
  });

  return NextResponse.json({ success: true });
}
