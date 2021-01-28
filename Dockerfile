FROM arm64v8/nginx
COPY build /usr/share/nginx/html
EXPOSE 80
