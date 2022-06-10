FROM node:16.15-alpine3.14

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install -g npm@8.12.1 --save --legacy-peer-deps

COPY . .
