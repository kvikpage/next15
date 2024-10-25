FROM node:22-bookworm-slim AS base

RUN corepack enable pnpm

# Install dependencies
FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Add build argument for WEBSITE_NAME
ARG WEBSITE_NAME=${WEBSITE_NAME}

RUN pnpm run build

# Copy
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static



EXPOSE 3000
CMD ["node", "server.js"]
