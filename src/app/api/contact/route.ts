import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify(); // تحقق من الاتصال

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@fusion-turk.com",
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "تم إرسال رسالتك بنجاح ✔" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Email error:", error.message);
    } else {
        console.error("Email error:", error);
    }
    return NextResponse.json(
        { success: false, message: "حدث خطأ أثناء الإرسال" },
        { status: 500 }
    );
  }

}
