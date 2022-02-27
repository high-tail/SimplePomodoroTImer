FROM node:16.13.1-alpine3.13
WORKDIR /usr/src/app
COPY simple_pomodoro_timer/package.json simple_pomodoro_timer/package-lock.json ./
COPY . ./
RUN yarn
