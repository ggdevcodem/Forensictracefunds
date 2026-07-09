# ForensicTraceFund - Production Deployment Guide

## Railway.app Deployment (Recommended)

### Prerequisites
- GitHub account with repository
- Railway.app account (free)
- PostgreSQL database (provided by Railway)
- SendGrid account (free tier: 100 emails/day)
- Custom domain (optional)

### Step-by-Step Deployment

#### 1. Create Railway Account
```bash
# Go to https://railway.app
# Sign up with GitHub
# Create new project
```

#### 2. Connect GitHub Repository
```bash
# In Railway Dashboard:
# 1. Click "Create New"
# 2. Select "GitHub Repo"
# 3. Authorize Railway
# 4. Select "ggdevcodem/Forensictracefunds"
# 5. Railway auto-detects monorepo structure
```

#### 3. Add PostgreSQL Database
```bash
# In Railway Project Settings:
# 1. Click "+" button
# 2. Search "PostgreSQL"
# 3. Click "Add PostgreSQL"
# 4. Railway creates database
# 5. Environment variables auto-injected
```

#### 4. Set Environment Variables

**In Railway Project Variables:**

```env
# Backend Configuration
NODE_ENV=production
PORT=5000
JWT_SECRET=your_strong_secret_key_min_32_chars
JWT_EXPIRY=7d
LOG_LEVEL=info

# CORS Configuration
CORS_ORIGIN=https://your-domain.com

# Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@forensictracefund.com

# Frontend Configuration
NEXT_PUBLIC_API_URL=https://api.your-domain.com
NEXT_PUBLIC_APP_URL=https://forensictracefund.com
```

#### 5. Generate Strong JWT Secret
```bash
# On your machine:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 6. Configure SendGrid
```bash
# 1. Go to sendgrid.com
# 2. Create free account
# 3. Create API key
# 4. Copy key to JWT_SECRET above
# 5. Add sender email
```

#### 7. Deploy
```bash
# Railway auto-deploys on push to main
# Or manually trigger in Dashboard
# Wait for build (3-5 minutes)
```

#### 8. Run Database Migrations
```bash
# In Railway Dashboard:
# 1. Select backend service
# 2. Go to "Deployments"
# 3. Click "Latest" deployment
# 4. Click "View Logs"
# 5. Run command: npm run migrate
```

#### 9. Custom Domain (Optional)
```bash
# In Railway Project Settings:
# 1. Click "Domain"
# 2. Enter domain: forensictracefund.com
# 3. Update DNS records
# 4. Wait for SSL certificate (Let's Encrypt)
```

### DNS Configuration

**For Railway Deployment:**

```
DNS Records:

CNAME Record:
  Name: @
  Value: your-railway-url.railway.app

WWW CNAME:
  Name: www
  Value: forensictracefund.com
```

---

## Alternative: Vercel + Railway

### Frontend on Vercel

```bash
# In frontend directory:
vercel deploy --prod

# Set environment variables in Vercel:
NEXT_PUBLIC_API_URL=https://your-railway-backend.railway.app
NEXT_PUBLIC_APP_URL=https://your-vercel-url.vercel.app
```

### Backend on Railway

Follow steps 1-8 above for backend only.

---

## Docker Local Build & Push

### Build Docker Images

```bash
# Build all services
docker-compose -f docker-compose.prod.yml build

# Build individual services
docker build -t forensictracefund-backend ./backend
docker build -t forensictracefund-frontend ./frontend
```

### Push to Docker Hub

```bash
# Login
docker login

# Tag images
docker tag forensictracefund-backend:latest YOUR_USERNAME/forensictracefund-backend:latest
docker tag forensictracefund-frontend:latest YOUR_USERNAME/forensictracefund-frontend:latest

# Push
docker push YOUR_USERNAME/forensictracefund-backend:latest
docker push YOUR_USERNAME/forensictracefund-frontend:latest
```

---

## Post-Deployment Checklist

- [ ] Database migrations completed
- [ ] Health check endpoint responds
- [ ] User can sign up
- [ ] User can login
- [ ] Contact form works
- [ ] Email verification sends
- [ ] Password reset works
- [ ] Frontend loads without errors
- [ ] All pages accessible
- [ ] SSL certificate active
- [ ] Performance acceptable (< 2s load time)
- [ ] No sensitive data in logs

---

## Monitoring

### Railway Dashboard

- View logs in real-time
- Monitor CPU & memory
- See deployment history
- Manage environment variables
- View metrics

### Health Endpoints

```bash
# Backend health
curl https://api.your-domain.com/api/health

# Response:
# {"status":"ok","database":"connected"}
```

---

## Troubleshooting

### Database Connection Error

```bash
# Check DATABASE_URL is set
# Verify PostgreSQL is running
# Check credentials
# Ensure IP whitelist allows connections
```

### Deployment Fails

```bash
# Check build logs in Railway
# Verify package.json files exist
# Check for missing dependencies
# Ensure TypeScript compilation succeeds
```

### Slow Performance

```bash
# Monitor Railway resource usage
# Check database query performance
# Implement caching
# Optimize API responses
```

### Email Not Sending

```bash
# Verify SendGrid API key
# Check rate limits (100/day free)
# Verify sender email
# Check spam folder
# Review application logs
```

---

## Scaling

### As Traffic Grows

1. **Increase Railway Instance**
   - Settings → Instance Size
   - Scale vertically (more resources per instance)

2. **Add Database Read Replicas**
   - Railway → PostgreSQL → Scaling
   - Distribute read queries

3. **Implement Caching**
   - Add Redis for sessions
   - Cache API responses

4. **Add CDN**
   - Cloudflare for static assets
   - Reduce backend load

5. **Database Optimization**
   - Add indexes
   - Archive old data
   - Optimize queries

---

## Security Hardening

### Before Production

- [ ] Change all default passwords
- [ ] Generate strong JWT secret (min 32 chars)
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Rate limit all endpoints
- [ ] Add WAF (Web Application Firewall)
- [ ] Enable database encryption
- [ ] Backup database regularly
- [ ] Monitor logs for attacks
- [ ] Keep dependencies updated

### Ongoing

```bash
# Check for vulnerabilities
npm audit
npm audit fix

# Update dependencies
npm update

# Review logs regularly
# Monitor for suspicious activity
# Test security measures
```

---

## Maintenance

### Daily
- Monitor error logs
- Check system health
- Verify backup status

### Weekly
- Review performance metrics
- Check for failed jobs
- Update dependencies if needed

### Monthly
- Security audit
- Database optimization
- Cost review
- Backup testing

### Quarterly
- Major version updates
- Security hardening review
- Capacity planning

---

## Cost Estimation

### Railway.app
- Starter: $5/month (1GB RAM, 1 CPU)
- Pro: $10-20/month (more resources)
- PostgreSQL: $15/month (managed)
- **Total: ~$20-35/month**

### Vercel (Frontend only)
- Hobby: Free
- Pro: $20/month

### SendGrid (Email)
- Free: 100 emails/day
- Pro: $20-30/month (higher limits)

### Domain
- $10-15/year

**Total Estimated: $35-60/month**

---

## Support Resources

- Railway Documentation: https://railway.app/docs
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Express.js Documentation: https://expressjs.com/
- PostgreSQL Documentation: https://www.postgresql.org/docs/

---

**Deployment Status:** ✅ Production Ready
**Last Updated:** July 9, 2026
**Version:** 1.0.0
