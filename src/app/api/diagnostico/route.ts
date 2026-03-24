import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type DiagnosticoPayload = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: number;
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<DiagnosticoPayload>;
    const payload: DiagnosticoPayload = {
      q1: String(body.q1 ?? "").trim(),
      q2: String(body.q2 ?? "").trim(),
      q3: String(body.q3 ?? "").trim(),
      q4: String(body.q4 ?? "").trim(),
      q5: Number(body.q5 ?? 0),
      nombre: String(body.nombre ?? "").trim(),
      empresa: String(body.empresa ?? "").trim(),
      correo: String(body.correo ?? "").trim(),
      telefono: String(body.telefono ?? "").trim(),
    };

    if (
      !payload.q1 ||
      !payload.q2 ||
      !payload.q3 ||
      !payload.q4 ||
      !payload.q5 ||
      !payload.nombre ||
      !payload.empresa ||
      !payload.correo ||
      !payload.telefono
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.correo)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        { error: "Configuración SMTP incompleta en el servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipients = ["oscar.bernal@cyelos.com", "juan.pena@cyelos.com"];
    const asunto = `Nuevo diagnóstico gratuito - ${payload.empresa}`;

    const text = [
      "Nuevo registro de diagnóstico gratuito",
      "",
      `1) Jornada principal: ${payload.q1}`,
      `2) Uso de Excel y Word: ${payload.q2}`,
      `3) Uso de software pesado/legacy: ${payload.q3}`,
      `4) Dispositivos USB críticos: ${payload.q4}`,
      `5) Puestos a optimizar: ${payload.q5}`,
      "",
      `Nombre: ${payload.nombre}`,
      `Empresa: ${payload.empresa}`,
      `Correo: ${payload.correo}`,
      `Teléfono: ${payload.telefono}`,
    ].join("\n");

    const html = `
      <h2>Nuevo registro de diagnóstico gratuito</h2>
      <h3>Respuestas del cuestionario</h3>
      <p><strong>1) Jornada principal:</strong> ${payload.q1}</p>
      <p><strong>2) Uso de Excel y Word:</strong> ${payload.q2}</p>
      <p><strong>3) Software pesado/legacy:</strong> ${payload.q3}</p>
      <p><strong>4) USB críticos:</strong> ${payload.q4}</p>
      <p><strong>5) Puestos a optimizar:</strong> ${payload.q5}</p>
      <hr />
      <h3>Datos de contacto</h3>
      <p><strong>Nombre:</strong> ${payload.nombre}</p>
      <p><strong>Empresa:</strong> ${payload.empresa}</p>
      <p><strong>Correo:</strong> ${payload.correo}</p>
      <p><strong>Teléfono:</strong> ${payload.telefono}</p>
    `;

    await transporter.sendMail({
      from: smtpFrom,
      to: recipients.join(","),
      replyTo: payload.correo,
      subject: asunto,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "No fue posible procesar la solicitud." },
      { status: 500 },
    );
  }
}
