# Multi-stage build for production

# Stage 1: Backend builder
FROM node:18-alpine AS backend-builder
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production

# Stage 2: Frontend builder
FROM node:18-alpine AS frontend-builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 3: Production image
FROM node:18-alpine
WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy backend production dependencies
COPY --from=backend-builder /app/node_modules ./node_modules
COPY backend/src ./src
COPY backend/package*.json ./
COPY backend/tsconfig.json ./

# Build backend
RUN npm run build

# Copy frontend build
COPY --from=frontend-builder /app/.next ./.next
COPY --from=frontend-builder /app/public ./public
COPY --from=frontend-builder /app/package.json ./frontend-package.json

ENV NODE_ENV=production
EXPOSE 5000 3000

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "start"]