FROM node:18-alpine3.15

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .