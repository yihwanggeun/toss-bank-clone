# Deposit-Service - 3002번 포트 사용
FROM node:20.15.0

RUN mkdir /tmp/backend
WORKDIR /tmp/backend

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3002

# Product Service 3003 Port
FROM node:20.15.0

RUN mkdir /tmp/backend
WORKDIR /tmp/backend

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3002

CMD ["npm","start"]

## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop product-service
## docker rm product-service
## docker rmi product-service-image:latest

## docker build -t product-service-image . 
## docker run -it -p 3001:1398 --name product-service product-service-image /bin/bash
## npm start

## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop deposit-service
## docker rm deposit-service
## docker rmi deposit-service-image:latest

## docker build -t deposit-service-image . 
## docker run -it -p 3002:3002 --name deposit-service deposit-service-image /bin/bash
## npm start

