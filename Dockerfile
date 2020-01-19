FROM node:carbon
WORKDIR /usr/src/app
COPY server.js ./
COPY server .
COPY build ./build
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]