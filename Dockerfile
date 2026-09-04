FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html vite.config.js ./
COPY src ./src
COPY public ./public
COPY fetch_sheets.js server.js ./
COPY credentials.json ./

RUN npm run build

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1

CMD ["node", "server.js"]
