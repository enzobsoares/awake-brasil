import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // Configuração do servidor SMTP (Ajustado para Locaweb)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465, // A Locaweb usa muito a porta 465
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // REGRA CRÍTICA PARA LOCAWEB: Ignorar certificados não autorizados que eles usam internamente
      tls: {
        rejectUnauthorized: false 
      }
    });

    let emailHtml = '';
    let emailSubject = '';

    // Monta o e-mail dependendo de qual form chamou a API
    if (type === 'contato') {
      emailSubject = `Novo Contato do Site: ${data.subject}`;
      emailHtml = `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Assunto:</strong> ${data.subject}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${data.message}</p>
      `;
    } else if (type === 'credenciamento') {
      emailSubject = `Nova Candidatura de Parceiro: ${data.name}`;
      emailHtml = `
        <h2>Nova Solicitação de Credenciamento</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Empresa:</strong> ${data.company || 'Não informado'}</p>
        <p><strong>Local:</strong> ${data.city} - ${data.state}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <hr />
        <p><strong>Resumo da Experiência:</strong></p>
        <p>${data.experience}</p>
      `;
    } else {
      return NextResponse.json({ error: 'Tipo de formulário inválido' }, { status: 400 });
    }

    // Configura o envio
    const mailOptions = {
      // OBRIGATÓRIO NA LOCAWEB: O e-mail dentro dos < > deve ser idêntico ao process.env.SMTP_USER
      from: `"Site Awake Brasil" <${process.env.SMTP_USER}>`, 
      to: 'contato@grupoawakebrasil.com', // E-mail onde a equipe da Awake vai receber
      replyTo: data.email, // Se a equipe clicar em "Responder", vai para o cliente
      subject: emailSubject,
      html: emailHtml,
    };

    // Dispara o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ error: 'Falha ao enviar o e-mail' }, { status: 500 });
  }
}