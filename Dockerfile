FROM node:18.18-slim

WORKDIR /frontend

# Install basic SO and Python
RUN apt-get update && apt-get install -y --no-install-recommends \
  curl vim wget \
  build-essential \
  && npm install -g npm@10.9.0 \
  && npm install -g pnpm \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g pm2@5.2.0

#### Prepare Frontend Vuejs 3

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install

COPY . ./

RUN pnpm run prod

ENV SHELL=/bin/bash LANG=en_US.UTF-8

COPY . ./

EXPOSE 3000
