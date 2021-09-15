FROM node:16-alpine3.11

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY . ./

RUN npm install

CMD ["node", "app.js"]

EXPOSE 3000