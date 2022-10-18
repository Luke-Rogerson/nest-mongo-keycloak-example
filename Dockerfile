FROM node:18 as api
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build