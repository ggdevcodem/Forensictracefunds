# ForensicTraceFund - Quick Reference

## 🚀 Getting Started (5 minutes)

### Development
```bash
git clone https://github.com/ggdevcodem/Forensictracefunds.git
cd Forensictracefunds
docker-compose up -d
```

### Production (Railway)
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to https://railway.app
# 3. Connect repository
# 4. Add PostgreSQL
# 5. Set env vars
# 6. Deploy!
```

## 📋 API Endpoints

```
Auth:
  POST   /api/auth/signup
  POST   /api/auth/login
  POST   /api/auth/logout
  POST   /api/auth/forgot-password
  POST   /api/auth/reset-password

User:
  GET    /api/user/me

Contact:
  POST   /api/contact

Health:
  GET    /api/health
```

## 📄 Pages

```
Auth:
  /en/login
  /en/signup
  /en/forgot-password
  /en/reset-password

Core:
  /en/
  /en/about
  /en/solutions
  /en/contact

Services (10):
  /en/blockchain-forensics
  /en/crypto-recovery
  /en/wallet-decryption
  /en/crypto-asset-identification
  /en/wallet
  /en/finance
  /en/threat-intelligence
  /en/compliance-investigations
  /en/defi-compliance
  /en/law-enforcement

Promo:
  /en/giveaway
  /en/airdrop

Legal:
  /en/privacy-policy
```

## 🔑 Environment Variables

```env
# Backend
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
CORS_ORIGIN=https://your-domain.com
SENDGRID_API_KEY=your_key

# Frontend
NEXT_PUBLIC_API_URL=https://api.your-domain.com
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📊 Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind, React Hook Form
- **Backend:** Express, TypeScript, PostgreSQL, JWT
- **DevOps:** Docker, Railway.app, GitHub
- **Security:** bcrypt, JWT, HTTPS, Rate Limiting

## 🎯 Project Stats

- ✅ 20+ pages
- ✅ 8 API endpoints
- ✅ 3 database tables
- ✅ Complete authentication
- ✅ Email integration
- ✅ Production ready

## 🔗 Links

- **GitHub:** https://github.com/ggdevcodem/Forensictracefunds
- **Railway:** https://railway.app
- **Docs:** See DEPLOYMENT_PRODUCTION.md

---

**Status:** ✅ Production Ready | **Version:** 1.0.0
