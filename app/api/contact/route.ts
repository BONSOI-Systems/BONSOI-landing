import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Format the service name
        const serviceNames: Record<string, string> = {
            "ai-ml": "AI & Machine Learning",
            "web3": "Web3 & Blockchain",
            "full-stack": "Full-Stack Development",
            "mobile": "Mobile App Development",
            "cloud": "Cloud & DevOps",
            "consulting": "Technology Consulting",
        };

        const formattedService = serviceNames[service] || service;

        // Email content
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0;">BONSOI Systems</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e5e5; border-top: none;">
          <h2 style="color: #333; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 140px;">Name:</td>
              <td style="padding: 10px 0; color: #333; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #666;">Company:</td>
              <td style="padding: 10px 0; color: #333;">${company}</td>
            </tr>
            ` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #666;">Phone:</td>
              <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; color: #666;">Service:</td>
              <td style="padding: 10px 0;"><span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${formattedService}</span></td>
            </tr>
          </table>
          
          <h2 style="color: #333; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">Project Details</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the contact form at bonsoi.systems</p>
          </div>
        </div>
      </div>
    `;

        // Plain text version
        const textContent = `
New Contact Form Submission - BONSOI Systems

Contact Details:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ""}
${phone ? `- Phone: ${phone}` : ""}
- Service Interested In: ${formattedService}

Project Details:
${message}

---
This email was sent from the contact form at bonsoi.systems
    `;

        // Send email to both addresses
        const mailOptions = {
            from: `"BONSOI Systems" <${process.env.SMTP_EMAIL}>`,
            to: "bonsoisystems@gmail.com, vishalmaurya850@gmail.com",
            replyTo: email,
            subject: `New Contact: ${name} - ${formattedService}`,
            text: textContent,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        // Send confirmation email to the user
        const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0;">BONSOI Systems</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e5e5; border-top: none;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #333; line-height: 1.6;">Thank you for reaching out to BONSOI Systems! We have received your inquiry about <strong>${formattedService}</strong>.</p>
          
          <p style="color: #333; line-height: 1.6;">Our team will review your message and get back to you within 24-48 hours.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #666; margin: 0 0 10px; font-size: 14px;">Your message:</p>
            <p style="color: #333; margin: 0; line-height: 1.6; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="color: #333; line-height: 1.6;">In the meantime, feel free to explore our <a href="https://bonsoi.vercel.app/case-studies" style="color: #3b82f6;">case studies</a> or <a href="https://bonsoi.vercel.app/services" style="color: #3b82f6;">services</a>.</p>
          
          <p style="color: #333; line-height: 1.6; margin-top: 30px;">Best regards,<br><strong>BONSOI Systems Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} BONSOI Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

        const confirmationOptions = {
            from: `"BONSOI Systems" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: "Thank you for contacting BONSOI Systems",
            html: confirmationHtml,
        };

        await transporter.sendMail(confirmationOptions);

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
