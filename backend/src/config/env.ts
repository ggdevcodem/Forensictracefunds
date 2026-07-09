export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000'),
  databaseUrl: process.env.DATABASE_URL || 'postgresql://forensic:tracefund_dev_password@localhost:5432/forensictracefund',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-key-change-in-production',
  jwtExpiry: process.env.JWT_EXPIRY || '7d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  sendgridApiKey: process.env.SENDGRID_API_KEY,
  sendgridFromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@forensictracefund.com',
  logLevel: process.env.LOG_LEVEL || 'info',
};
