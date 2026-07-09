import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env';

// Routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import contactRoutes from './routes/contact.routes';
import healthRoutes from './routes/health.routes';

// Middleware
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Security and parsing middleware
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', healthRoutes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'ForensicTraceFund API v1.0.0',
    status: 'running',
    environment: config.nodeEnv,
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`
✅ ForensicTraceFund API Server`);
  console.log(`🚀 Running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔐 CORS Origin: ${config.corsOrigin}`);
  console.log(`\nEndpoints:`);
  console.log(`  POST   /api/auth/signup`);
  console.log(`  POST   /api/auth/login`);
  console.log(`  POST   /api/auth/logout`);
  console.log(`  POST   /api/auth/forgot-password`);
  console.log(`  POST   /api/auth/reset-password`);
  console.log(`  GET    /api/user/me`);
  console.log(`  POST   /api/contact`);
  console.log(`  GET    /api/health`);
  console.log('');
});

export default app;
