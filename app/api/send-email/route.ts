import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text } = await request.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      }
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #092333; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #FFC845;">Level Mind</h1>
            <p style="margin: 5px 0 0 0;">Novo Lead Capturado</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #092333; margin-bottom: 20px;">Detalhes do Lead</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Email:</strong> ${text.match(/Email: (.+)/)?.[1] || "N/A"}</p>
              <p><strong>Data:</strong> ${text.match(/Data: (.+)/)?.[1] || "N/A"}</p>
              <p><strong>Origem:</strong> Site Level Mind</p>
            </div>
            
            <div style="background: #092333; color: white; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0;">🎯 <strong>Ação recomendada:</strong> Entrar em contato em até 4 horas úteis</p>
            </div>
          </div>
          
          <div style="background: #092333; color: #FFC845; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Level Mind - Capacitação Empresarial em IA Generativa</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 })
  }
}
