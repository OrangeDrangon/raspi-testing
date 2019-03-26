FROM node:8-alpine

WORKDIR /var/usr/app

ADD package.json .
ADD yarn.lock .

RUN yarn install

ADD ./src ./src

RUN yarn tsc

CMD ["node", "./dist/index.js"]
