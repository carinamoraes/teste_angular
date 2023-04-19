# Fase 1
FROM node:16.16.0-alpine as angular

WORKDIR /usr/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Fase 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular usr/frontend/dist/angular-editor-fabric-js-app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

