FROM node:10-slim

ENV \
  PORT=8000 \
  msg="Hello from your environment"

WORKDIR /app

COPY package.json package-lock.json index.js /app/

RUN npm ci

CMD ["node", "index.js"]
