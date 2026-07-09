# ForensicTraceFund - Deployment Guide

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Railway.app Deployment](#railwayapp-deployment)
4. [Alternative Deployments](#alternative-deployments)
5. [Post-Deployment](#post-deployment)
6. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

- GitHub account with the repository
- Railway.app account (free tier available)
- Custom domain (optional, Railway provides free subdomain)
- SendGrid account (free tier: 100 emails/day)

---

## Environment Setup

### Local Testing Before Deployment

```bash
# Clone repository
git clone https://github.com/ggdevcodem/Forensictracefunds.git
cd Forensictracefunds

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
vim .env.local

# Start with Docker Compose
docker-compose up -d

# Or manual setup
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm run dev
```

### Verify Local Setup

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health
- PostgreSQL: localhost:5432

---

## Railway.app Deployment

### Step 1: Create Railway.app Account

1. Go to https://railway.app
2. Sign up with GitHub (easiest)
3. Create new project

### Step 2: Connect GitHub Repository

1. In Railway dashboard, click "Create New"
2. Select "GitHub Repo"
3. Authorize Railway to access your GitHub
4. Select `ggdevcodem/Forensictracefunds`
5. Railway auto-detects it's a monorepo

### Step 3: Add PostgreSQL Database

1. In project, click "+"
2. Search "PostgreSQL"
3. Click "Add PostgreSQL"
4. Railway creates database and provides `DATABASE_URL`
5. Auto-injected into environment

### Step 4: Configure Environment Variables

In Railway Project Settings → Variables:

```
NODE_ENV=production
JWT_SECRET=generate_random_secret_here
JWT_EXPIRY=7d
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=noreply@forensictracefund.com
CORS_ORIGIN=https://your-railway-url.railway.app
LOG_LEVEL=info
```

### Step 5: Deploy

1. Railway auto-deploys on push to `main`
2. Or manually trigger: Dashboard → "Deploy"
3. Wait for build (3-5 minutes)
4. Logs available in Dashboard

### Step 6: Verify Deployment

```bash
# Get Railway URL from dashboard
API_URL=https://your-project.railway.app

# Test health endpoint
curl $API_URL/api/health

# Should return: {"status":"ok"}
```

### Step 7: Custom Domain (Optional)

1. Go to Railway Project Settings
2. Click "Domain"
3. Enter your domain: `forensictracefund.com`
4. Update DNS records (Railway provides instructions)
5. Wait for SSL certificate (auto via Let's Encrypt)

---

## Alternative Deployments

### Option A: Vercel (Frontend) + Railway (Backend)

**Frontend on Vercel:**
```bash
cd frontend
vercel deploy --prod
```

Set `NEXT_PUBLIC_API_URL` to your Railway backend URL.

**Backend on Railway:** Follow above steps.

### Option B: DigitalOcean App Platform

1. Create DigitalOcean account
2. Create App from GitHub
3. Add PostgreSQL database
4. Configure environment
5. Deploy

### Option C: AWS EC2 + RDS

**Complex setup but most control:**

```bash
# Build Docker image
docker build -t forensictracefund .

# Push to ECR
aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URI
docker push $ECR_URI/forensictracefund:latest

# Launch EC2 instance
# Connect RDS PostgreSQL database
# Deploy via ECS/Docker
```

### Option D: Self-Hosted (VPS)

**On DigitalOcean, Linode, AWS EC2, etc:**

```bash
# SSH into server
ssh root@your-server-ip

# Install dependencies
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone repository
git clone https://github.com/ggdevcodem/Forensictracefunds.git
cd Forensictracefunds

# Copy and edit environment
cp .env.example .env
vim .env

# Run with Docker Compose
docker-compose -f docker-compose.prod.yml up -d

# Setup reverse proxy (Nginx)
sudo apt-get install nginx
# Configure nginx for SSL, proxying
```

---

## Post-Deployment

### 1. Database Migrations

Railway runs migrations automatically on deploy. If manual:

```bash
cd backend
npm run migrate
npm run seed # Optional: add sample data
```

### 2. Health Check

```bash
curl https://forensictracefund.com/api/health
# Response: {"status":"ok"}
```

### 3. Test Authentication Flow

1. Visit https://forensictracefund.com/en/signup
2. Create test account
3. Verify email (check inbox)
4. Login at /en/login
5. Check user dashboard

### 4. Test Contact Form

1. Visit /en/contact
2. Submit test message
3. Verify admin receives email
4. Check database for message

### 5. Setup Email Verification

**SendGrid Setup:**

1. Create SendGrid account (free tier available)
2. Add sender email
3. Copy API key
4. Set `SENDGRID_API_KEY` in Railway
5. Test by signing up

### 6. SSL Certificate

- Railway auto-creates via Let's Encrypt
- Vercel auto-creates
- Self-hosted: Use certbot for Let's Encrypt

```bash
# Certbot setup (self-hosted)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d forensictracefund.com
```

### 7. Domain Configuration

**For custom domain:**

```
DNS Records:

A Record:
  Name: @
  Value: your-server-ip (or CNAME from Railway)

WWW CNAME:
  Name: www
  Value: forensictracefund.com

Mail Records (if using custom email):
  MX, SPF, DKIM records
```

---

## Monitoring & Maintenance

### Railway Monitoring

1. Dashboard shows:
   - CPU & Memory usage
   - Deployment history
   - Logs (real-time)
   - Error tracking

2. Setup alerts:
   - High CPU
   - High memory
   - Deployment failures
   - Crashes

### Database Backups

**Railway (automatic):**
- Daily backups kept 30 days
- Restore from dashboard

**Manual backup:**
```bash
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql
```

### Performance Monitoring

1. Setup Google Analytics
2. Setup error tracking (Sentry)
3. Monitor API response times
4. Check database query performance

### Updates & Maintenance

**Weekly:**
- Check logs for errors
- Monitor performance metrics
- Review failed requests

**Monthly:**
- Update dependencies: `npm audit fix`
- Test backup restoration
- Review security logs

**Quarterly:**
- Security audit
- Performance optimization
- Database maintenance

### Scaling

When traffic increases:

1. **Railway:** Increase instance size in Settings
2. **Database:** Upgrade PostgreSQL plan
3. **CDN:** Add Cloudflare for static assets
4. **Caching:** Implement Redis for sessions

---

## Troubleshooting

### Deployment Fails

```bash
# Check build logs in Railway dashboard
# Common issues:

# 1. Missing environment variables
# Solution: Add all variables from .env.example

# 2. Database connection error
# Solution: Verify DATABASE_URL format

# 3. Port binding error
# Solution: Railway manages ports, code shouldn't hardcode
```

### High Memory Usage

```bash
# Check for memory leaks
# Increase Railway instance size
# Implement caching
# Optimize database queries
```

### Email Not Sending

```bash
# Verify SendGrid API key is correct
# Check email rate limits (100/day free tier)
# Verify sender email is verified in SendGrid
# Check spam folder
```

### Database Issues

```bash
# Connect to production database (careful!)
psql $DATABASE_URL

# Common fixes:
VACUUM;  # Optimize tables
REINDEX; # Rebuild indexes

# Check slow queries
SELECT * FROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 10;
```

---

## Security Checklist

- [ ] All environment variables set (no defaults in code)
- [ ] HTTPS/SSL enabled
- [ ] Database password changed from default
- [ ] JWT secret is strong (min 32 chars)
- [ ] CORS_ORIGIN set to your domain
- [ ] SendGrid API key secured
- [ ] Backups tested and working
- [ ] Rate limiting enabled
- [ ] CSRF protection active
- [ ] Security headers configured

---

## Cost Estimation

### Railway.app (Recommended)
- Backend: $5/month
- PostgreSQL: $15/month
- **Total: ~$20/month**

### Vercel (Frontend only)
- Free tier available
- Pro: $20/month

### SendGrid (Email)
- Free: 100 emails/day
- Pro: $20/month

### Custom Domain
- $10-15/year

**Total estimated:** $35-50/month

---

## Support

For deployment issues:
1. Check Railway logs
2. Review error messages
3. Check GitHub Issues
4. Contact support@forensictracefund.com

---

**Deployment Status:** ✅ Ready for Production
**Last Updated:** 2026-07-09