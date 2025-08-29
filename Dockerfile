# =============================================================================
# FABRIAPP WEBSITE - OPTIMIZED LIGHTWEIGHT DOCKERFILE
# =============================================================================
# Objetivo: Imagen final de ~25MB para una landing page React
# =============================================================================

# =============================================================================
# STAGE 1: BUILD STAGE 🔨 (Solo para compilar, se descarta después)
# =============================================================================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Alpine es mucho más ligero que slim/ubuntu
# Solo instalar lo mínimo necesario para Vite
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*

# Copy package files for better caching
COPY package*.json ./

# Install dependencies - solo las necesarias para build
RUN npm ci --only=production --no-audit --no-fund

# Install dev dependencies separately (se pueden cachear mejor)
RUN npm ci --only=development --no-audit --no-fund

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Verify build exists (opcional, quitar si quieres aún más pequeño)
RUN ls -la /app/dist

# =============================================================================
# STAGE 2: PRODUCTION STAGE 🌐 (Solo archivos estáticos)
# =============================================================================
FROM nginx:alpine AS production

# Copy ONLY the built static files (no Node.js, no source code)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy lightweight nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 for Cloud Run compatibility
EXPOSE 8080

# Simple health check for Cloud Run (using port 8080)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=2 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Labels (minimal)
LABEL project="fabriapp-website" version="1.0"

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# =============================================================================
# RESULTADO ESPERADO: ~25MB
# =============================================================================
# - nginx:alpine: ~15MB
# - Tu app compilada: ~5-10MB
# - Total: ~25MB (vs 1.32GB actual)
# =============================================================================