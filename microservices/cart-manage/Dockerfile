FROM node:18-alpine

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD ./package.json /var/www/app/package.json

RUN npm install

CMD npm run build && npm run start:${NODE_ENV:-prod}