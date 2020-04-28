FROM node:carbon
WORKDIR /usr/src/app
COPY build .
COPY server/package.json .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.tsx" ]