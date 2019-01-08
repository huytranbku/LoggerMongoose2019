FROM node:latest

WORKDIR /usr/src/app/

COPY package.json ./
RUN npm install --silent --no-cache

COPY ./ ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start