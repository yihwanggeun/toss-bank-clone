# Docker 환경에서 할 이미지
# 이 이미지는 Docker Hub에서 다운이 되서 빌드가 됩니다.
FROM node:20.15.0

RUN mkdir /tmp/backend
WORKDIR /tmp/backend

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3001

# Product Service 3003 Port
FROM node:20.15.0

RUN mkdir /tmp/backend
WORKDIR /tmp/backend

COPY ./package.json ./

RUN npm install

COPY ./ ./

# 빌드 인자 정의
ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD
ARG DB_NAME

# 환경 변수로 설정
ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_NAME=$DB_NAME

EXPOSE 3001

CMD ["npm","start"]

## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop product-service
## docker rm product-service
## docker rmi product-service-image:latest

## docker build -t product-service-image . 
## docker run -it -p 3001:1398 --name product-service product-service-image /bin/bash
## npm start


## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop account-service
## docker rm account-service
## docker rmi account-service-image:latest

## docker build -t account-service-image . 
## docker run -it -p 3001:3001 --name account-service account-service-image /bin/bash
## npm start

