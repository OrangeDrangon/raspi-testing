FROM balenalib/raspberrypi3-node:11

WORKDIR /var/usr/app

RUN apt-get update && apt-get install -yq --no-install-recommends pigpio

ADD package.json .
ADD yarn.lock .

RUN yarn install

ADD ./src ./src

RUN yarn tsc

CMD ["node", "./dist/index.js"]
