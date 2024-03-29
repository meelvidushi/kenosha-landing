FROM node:20-slim AS builder

WORKDIR /app
COPY . /app

RUN npm i
RUN npm run build

# Use the official Nginx image as the base
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Replace with our own custom.conf configuration file
COPY custom.conf /etc/nginx/conf.d/

# Copy the static content (index.html and other files)
COPY --from=builder /app/build /usr/share/nginx/html 

# Expose port 80
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
