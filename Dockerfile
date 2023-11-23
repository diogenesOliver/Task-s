FROM node:latest

WORKDIR /usr/app
COPY package*.json ./

RUN npm audit fix --force
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]