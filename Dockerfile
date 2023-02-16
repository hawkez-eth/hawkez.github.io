FROM node:18-alpine

WORKDIR /usr

COPY . ./

RUN yarn

CMD [ "yarn", "develop" ]