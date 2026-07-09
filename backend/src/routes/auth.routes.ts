import { Router, Request, Response } from 'express';
import { query } from '../config/database';
import { generateToken, verifyToken } from '../utils/jwt';
import { hashPassword, comparePasswords, generateResetToken } from '../utils/password';
import { sendVerificationEmail, sendPasswordResetEmail } from '../utils/email';
import { validateRequest } from '../middleware/validation';
import { loginLimiter, signupLimiter } from '../middleware/rateLimiter';
import { SignupSchema, LoginSchema, ForgotPasswordSchema, ResetPasswordSchema } from '../middleware/schemas';

const router = Router();

// Signup
router.post(
  '/signup',
  signupLimiter,
  validateRequest(SignupSchema),
  async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      // Check if user exists
      const existingUser = await query(
        'SELECT id FROM users WHERE email = $1',
        [email]
      );

      if (existingUser.rows.length > 0) {
        res.status(400).json({ error: 'Email already registered' });
        return;
      }

      // Hash password
      const hashedPassword = await hashPassword(password);

      // Create user
      const result = await query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email, name',
        [name, email, hashedPassword]
      );

      const user = result.rows[0];
      const token = generateToken(user.id);

      // Send verification email
      try {
        await sendVerificationEmail(email, generateResetToken());
      } catch (emailError) {
        console.error('Error sending verification email:', emailError);
      }

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(201).json({
        success: true,
        message: 'Account created successfully',
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: 'Failed to create account' });
    }
  }
);

// Login
router.post(
  '/login',
  loginLimiter,
  validateRequest(LoginSchema),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Get user
      const result = await query(
        'SELECT id, email, name, password FROM users WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }

      const user = result.rows[0];

      // Check password
      const passwordMatch = await comparePasswords(password, user.password);
      if (!passwordMatch) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }

      // Generate token
      const token = generateToken(user.id);

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        message: 'Logged in successfully',
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  }
);

// Forgot Password
router.post(
  '/forgot-password',
  validateRequest(ForgotPasswordSchema),
  async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      // Check if user exists
      const result = await query(
        'SELECT id FROM users WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        // Don't reveal if email exists (security best practice)
        res.json({ success: true, message: 'If email exists, reset link sent' });
        return;
      }

      const userId = result.rows[0].id;
      const resetToken = generateResetToken();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      // Save reset token
      await query(
        'INSERT INTO password_resets (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [userId, resetToken, expiresAt]
      );

      // Send reset email
      try {
        await sendPasswordResetEmail(email, resetToken);
      } catch (emailError) {
        console.error('Error sending reset email:', emailError);
      }

      res.json({ success: true, message: 'If email exists, reset link sent' });
    } catch (error) {
      console.error('Forgot password error:', error);
      res.status(500).json({ error: 'Failed to process request' });
    }
  }
);

// Reset Password
router.post(
  '/reset-password',
  validateRequest(ResetPasswordSchema),
  async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;

      // Verify token
      const result = await query(
        'SELECT user_id FROM password_resets WHERE token = $1 AND expires_at > NOW()',
        [token]
      );

      if (result.rows.length === 0) {
        res.status(400).json({ error: 'Invalid or expired reset token' });
        return;
      }

      const userId = result.rows[0].user_id;
      const hashedPassword = await hashPassword(newPassword);

      // Update password
      await query(
        'UPDATE users SET password = $1 WHERE id = $2',
        [hashedPassword, userId]
      );

      // Delete used token
      await query('DELETE FROM password_resets WHERE token = $1', [token]);

      res.json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
      console.error('Reset password error:', error);
      res.status(500).json({ error: 'Failed to reset password' });
    }
  }
);

// Logout
router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out successfully' });
});

export default router;
