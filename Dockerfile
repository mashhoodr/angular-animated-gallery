FROM node:8.12-alpine

RUN mkdir /app 

WORKDIR /app

# Allows docker to cache installed dependencies between builds
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

# Adds our application code to the `
COPY . /app

EXPOSE 8080

# kicks off the server
CMD npm run start-docker