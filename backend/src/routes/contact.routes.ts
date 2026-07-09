import { Router, Request, Response } from 'express';
import { query } from '../config/database';
import { validateRequest } from '../middleware/validation';
import { contactLimiter } from '../middleware/rateLimiter';
import { ContactSchema } from '../middleware/schemas';
import { sendContactConfirmationEmail } from '../utils/email';

const router = Router();

// Submit contact form
router.post(
  '/',
  contactLimiter,
  validateRequest(ContactSchema),
  async (req: Request, res: Response) => {
    try {
      const { name, email, phone, caseType, amount, message } = req.body;

      const result = await query(
        `INSERT INTO contact_messages (name, email, phone, case_type, amount, message, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, created_at`,
        [name, email, phone || null, caseType, amount || null, message, 'new']
      );

      const messageId = result.rows[0].id;

      // Send confirmation email
      try {
        await sendContactConfirmationEmail(email, name);
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
      }

      res.status(201).json({
        success: true,
        message: 'Message received',
        messageId,
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Failed to submit form' });
    }
  }
);

export default router;
