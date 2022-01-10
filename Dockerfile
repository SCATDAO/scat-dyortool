FROM node:latest as build-stage
WORKDIR /scat-worktool
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest  as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /scat-worktool/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
