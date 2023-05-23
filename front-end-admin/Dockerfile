FROM node:14.18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/admin
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:12.2.0-alpine

# EXPOSE 8080 
# # add this line in docker file.

# WORKDIR /app
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install vue@3.2.26

# RUN npm install @vue/cli -g

# CMD ["npm", "run", "serve"]