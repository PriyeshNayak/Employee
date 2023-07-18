FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM alpine AS production
WORKDIR /app
CMD [ "npm", "run", "docker:dev" ]