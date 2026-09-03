# Estágio 1: build da aplicação + geração de dados a partir do Google Sheets
FROM node:20-alpine AS build

WORKDIR /app

# Copia manifestos de dependências primeiro (melhor cache de camadas)
COPY package.json package-lock.json ./
RUN npm ci

# Copia o código-fonte
COPY index.html vite.config.js ./
COPY src ./src
COPY public ./public

# Credenciais da service account (usadas apenas em build, não vai para o runtime)
COPY credentials.json ./credentials.json
COPY fetch_sheets.js ./fetch_sheets.js

# Gera src/data.js direto da nuvem e builda o bundle estático
RUN npm run fetch:data && npm run build

# Estágio 2: servidor nginx estático
FROM nginx:1.27-alpine

# Configuração do nginx (SPA fallback para /index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
