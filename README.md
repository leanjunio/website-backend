# Website-Backend

This serves as the backend repository for my website [leanjunio.com](https://leanjunio.com).

## Motivation

The reason I divided my backend and my frontend is to allow the frontend and the backend to be completely separated in file structure. It's just a matter of preference for me.

## Tech / Framework used

- Node.js
- Express
- Body-Parser
- Cors
- Mongoose ORM
- MongoDB
- Sendgrid
- Docker + Docker Compose
- Nginx
- Dotenv

## Current Features

- Project List
- Career Timeline
- [Blog](https://blog.leanjunio.com/)

## Description

This website as a whole (including the frontend [frontend](https://github.com/leanjunio/website-frontend)) is built with an MVC architecture. I chose an MVC architecture because I found that it's the best architecture for what I have at the moment. I will most likely move towards another architecture such as Microservices when the time comes for it to be more suitable for my needs.

On top of having an MVC architecture, my website also utilizes the containerization technology: **Docker** and the **Nginx** web server.

#### **Why are you using docker?**

I use Docker in order to get over the hump of running an application in different environments. With Docker's containerization, I'm able to run my application in the same Linux kernel whether I'm on Windows or MacOS. This also allows me to only worry about what will be installed in a specific containeir. I don't have to worry if I don't have MongoDB installed in my Host OS for example, since Docker runs on its own Linux kernel, having it in my container is as simple as changing a few lines inside my `Dockerfile` or my `docker-compose.yml` file.

#### **Why are you using NGINX?**

Since Docker allows me to run specific containers in a specific port, I then utilize **Nginx** to direct traffic from a specific endpoint to Docker's assigned port. 

![Browser to Docker](https://github.com/leanjunio/website-backend/screenshots/browser-nginx-docker.png "Browser to Docker diagram")

