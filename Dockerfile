# Stage 1: Build the application
FROM node:20 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --peer-legacy-deps
COPY . .
RUN npm run build
RUN ls -l /app/dist
 
# Stage 2: Create the production image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
 
# Set ownership and permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 