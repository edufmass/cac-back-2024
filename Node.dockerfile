# develop stage
FROM node:20.15-bookworm AS dev-stage

ARG user
ARG uid
ARG gid

EXPOSE 3000

RUN apt clean && apt update && apt install python3 build-essential -y && npm i -g express cors sequelize
USER $user

WORKDIR /app