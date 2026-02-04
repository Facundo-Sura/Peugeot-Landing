import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validar que todos los campos estén presentes
    if (!name || !email || !message) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email], // Enviar al correo del usuario
      subject: `Nuevo mensaje de contacto de ${name}`,
      react: EmailTemplate({ firstname: name }),
      text: `Mensaje: ${message}\n\nEmail: ${email}`,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return Response.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    console.log("Email enviado:", data);
    return Response.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error interno:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}