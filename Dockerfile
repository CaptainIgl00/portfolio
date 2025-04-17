# ---------- Step 1: build ----------
FROM node:20-alpine AS builder
WORKDIR /app

# First copy the manifests to take advantage of the cache
COPY package*.json ./
RUN npm ci

# Copy the rest and then build
COPY . .
RUN npm run build && npm ci --omit=dev

# ---------- Step 2: image "runtime" ----------
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]