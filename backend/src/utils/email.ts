import nodemailer from 'nodemailer';
import { config } from '../config/env';

// Configure email service (using SendGrid or fallback to console logging for development)
const transporter = process.env.SENDGRID_API_KEY
  ? nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    })
  : nodemailer.createTransport({
      host: 'localhost',
      port: 1025,
      secure: false,
    });

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> => {
  try {
    await transporter.sendMail({
      from: config.sendgridFromEmail,
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/en/verify-email?token=${token}`;
  const html = `
    <h2>Verify Your Email</h2>
    <p>Click the link below to verify your email address:</p>
    <a href="${verificationUrl}">Verify Email</a>
    <p>Or copy and paste this link:</p>
    <p>${verificationUrl}</p>
    <p>This link will expire in 24 hours.</p>
  `;
  await sendEmail({ to: email, subject: 'Verify Your Email', html });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/en/reset-password?token=${token}`;
  const html = `
    <h2>Reset Your Password</h2>
    <p>Click the link below to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
    <p>Or copy and paste this link:</p>
    <p>${resetUrl}</p>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request this, please ignore this email.</p>
  `;
  await sendEmail({ to: email, subject: 'Reset Your Password', html });
};

export const sendContactConfirmationEmail = async (
  email: string,
  name: string
): Promise<void> => {
  const html = `
    <h2>We received your message</h2>
    <p>Hi ${name},</p>
    <p>Thank you for contacting ForensicTraceFund. We have received your message and will get back to you within 24 hours.</p>
    <p>If you have any urgent concerns, please call us at +1 (800) FORENSIC.</p>
    <p>Best regards,<br/>ForensicTraceFund Team</p>
  `;
  await sendEmail({ to: email, subject: 'We received your message', html });
};
