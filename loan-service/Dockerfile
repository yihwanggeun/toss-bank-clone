# Loan Service 3003 Port
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

EXPOSE 3003

CMD ["npm","start"]


## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop loan-service
## docker rm loan-service
## docker rmi loan-service-image:latest

## docker build -t loan-service-image . 
## docker run -it -p 3003:3003 --name loan-service loan-service-image /bin/bash
## npm start

