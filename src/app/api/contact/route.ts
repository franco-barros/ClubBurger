import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  //  Validar campos obligatorios
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios." },
      { status: 400 }
    );
  }

  //  Validar formato de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "El correo ingresado no es válido." },
      { status: 400 }
    );
  }

  // Bloquear emails sospechosos
  const forbiddenPatterns = /(asd|test|example|fake)/i;
  if (forbiddenPatterns.test(email)) {
    return NextResponse.json(
      { error: "El correo parece inválido o de prueba." },
      { status: 400 }
    );
  }

  // Enviar correo con Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // o SMTP de tu hosting
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    return NextResponse.json({ message: "Correo enviado con éxito ✅" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
