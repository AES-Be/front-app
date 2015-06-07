FROM node:0.10.38

ENV APP_NAME aes-app

WORKDIR /var/www

COPY ./package.json /var/www/package.json
RUN npm install

COPY ./src /var/www/src
COPY ./config /var/www/config
COPY ./package.json /var/www/package.json
COPY ./index.js /var/www/index.js

CMD ["npm", "start"]