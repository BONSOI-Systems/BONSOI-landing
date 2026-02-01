import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, date, time, topic } = body;

        // Validate required fields
        if (!name || !email || !phone || !date || !time || !topic) {
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

        // Format the date
        const formattedDate = new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        // Format time to 12-hour format
        const [hours, minutes] = time.split(":");
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        const formattedTime = `${hour12}:${minutes} ${ampm} IST`;

        // Email content to admin
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">📅 New Call Scheduled</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0;">BONSOI Systems Consultation Request</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e5e5; border-top: none;">
          <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #0369a1; font-size: 16px; margin: 0 0 10px;">📆 Scheduled For</h2>
            <p style="color: #333; font-size: 18px; font-weight: bold; margin: 0;">${formattedDate}</p>
            <p style="color: #666; font-size: 16px; margin: 5px 0 0;">🕐 ${formattedTime}</p>
          </div>
          
          <h2 style="color: #333; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #333; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">Phone:</td>
              <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
            </tr>
          </table>
          
          <h2 style="color: #333; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">Discussion Topic</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <p style="color: #333; margin: 0; line-height: 1.6;">${topic}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="color: #92400e; margin: 0; font-size: 14px;">⚡ <strong>Action Required:</strong> Please confirm this appointment by contacting the client.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">This request was submitted via bonsoi.vercel.app</p>
          </div>
        </div>
      </div>
    `;

        // Plain text version
        const textContent = `
New Call Scheduled - BONSOI Systems

📆 SCHEDULED FOR:
Date: ${formattedDate}
Time: ${formattedTime}

CONTACT DETAILS:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

DISCUSSION TOPIC:
${topic}

⚡ Action Required: Please confirm this appointment by contacting the client.

---
This request was submitted via bonsoi.vercel.app
    `;

        // Send email to admin
        const mailOptions = {
            from: `"BONSOI Systems" <${process.env.SMTP_EMAIL}>`,
            to: "bonsoisystems@gmail.com, vishalmaurya850@gmail.com",
            replyTo: email,
            subject: `📅 Call Scheduled: ${name} - ${formattedDate} at ${formattedTime}`,
            text: textContent,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        // Send confirmation email to the user
        const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">✅ Call Confirmed!</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0;">BONSOI Systems</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e5e5; border-top: none;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #333; line-height: 1.6;">Great news! Your consultation call with BONSOI Systems has been scheduled.</p>
          
          <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #0369a1; font-size: 16px; margin: 0 0 15px;">📆 Your Appointment</h2>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 5px 0; color: #666;">Date:</td>
                <td style="padding: 5px 0; color: #333; font-weight: bold;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #666;">Time:</td>
                <td style="padding: 5px 0; color: #333; font-weight: bold;">${formattedTime}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #666;">Duration:</td>
                <td style="padding: 5px 0; color: #333;">~30 minutes</td>
              </tr>
            </table>
          </div>

          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #666; margin: 0 0 5px; font-size: 14px;">Topic of Discussion:</p>
            <p style="color: #333; margin: 0; font-style: italic;">"${topic}"</p>
          </div>
          
          <p style="color: #333; line-height: 1.6;"><strong>What's Next?</strong></p>
          <ul style="color: #333; line-height: 1.8;">
            <li>Our team will reach out to you via phone or email to confirm the meeting link</li>
            <li>Prepare any questions or project details you'd like to discuss</li>
            <li>If you need to reschedule, please reply to this email</li>
          </ul>
          
          <p style="color: #333; line-height: 1.6;">We're excited to learn about your project and explore how we can help!</p>
          
          <p style="color: #333; line-height: 1.6; margin-top: 30px;">Best regards,<br><strong>BONSOI Systems Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #999; font-size: 12px; margin: 0;">Need to reschedule? Just reply to this email.</p>
            <p style="color: #999; font-size: 12px; margin: 5px 0 0;">📧 bonsoisystems@gmail.com | 📱 +91 9628525211</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} BONSOI Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

        const confirmationOptions = {
            from: `"BONSOI Systems" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: `✅ Call Confirmed: ${formattedDate} at ${formattedTime} - BONSOI Systems`,
            html: confirmationHtml,
        };

        await transporter.sendMail(confirmationOptions);

        return NextResponse.json(
            { success: true, message: "Call scheduled successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error scheduling call:", error);
        return NextResponse.json(
            { error: "Failed to schedule call. Please try again later." },
            { status: 500 }
        );
    }
}
