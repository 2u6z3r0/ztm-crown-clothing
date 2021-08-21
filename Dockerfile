FROM node:14.17.5-alpine

WORKDIR /front-end

COPY package.json ./
RUN npm install --silent


COPY . ./

CMD [ "npm", "start" ]

