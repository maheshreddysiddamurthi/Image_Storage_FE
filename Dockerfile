FROM node:21-alpine as stage1
WORKDIR /apps
COPY ./package*.json /apps
RUN npm install -g next
RUN npm install
COPY . /apps
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]