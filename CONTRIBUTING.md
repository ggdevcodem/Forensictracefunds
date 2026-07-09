# Contributing Guide

## Development Setup

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git
- Code editor (VS Code recommended)

### Local Setup

```bash
# Clone repository
git clone https://github.com/ggdevcodem/Forensictracefunds.git
cd Forensictracefunds

# Install dependencies
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Copy environment file
cp .env.example .env

# Start services
docker-compose up -d

# Run migrations
docker exec forensictracefund-api npm run migrate
```

### Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- PostgreSQL: localhost:5432

## Code Standards

### TypeScript
- Use strict mode
- Define proper types
- Avoid `any` type

### Naming Conventions
- Components: PascalCase
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
git add .
git commit -m "feat: add feature description"

# Push and create PR
git push origin feature/your-feature-name
```

## Testing

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test

# Lint
npm run lint

# Format
npm run format
```

## Pull Request Process

1. Create feature branch
2. Make changes
3. Run tests locally
4. Push and create PR
5. Address review comments
6. Merge when approved

## Issues

- Check existing issues first
- Provide clear description
- Include reproduction steps
- Add screenshots if applicable

## License

MIT License - see LICENSE file
