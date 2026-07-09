import { Router, Request, Response } from 'express';
import { pool } from '../config/database';

const router = Router();

// Health check
router.get('/health', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

export default router;
