FROM node:latest as build-stage
WORKDIR /scat-dyortool
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest  as production-stage
COPY --from=build-stage /scat-dyortool/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
