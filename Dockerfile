FROM node:12

WORKDIR /APP

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "start" ]