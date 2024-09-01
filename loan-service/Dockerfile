# Loan Service 3003 Port
FROM node:20.15.0

RUN mkdir /tmp/backend
WORKDIR /tmp/backend

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3003

CMD ["npm","start"]


## 이제 여기서 DockerFild을 기반으로 Docker 이미지를 빌드
## docker stop loan-service
## docker rm loan-service
## docker rmi loan-service-image:latest

## docker build -t loan-service-image . 
## docker run -it -p 3003:3003 --name loan-service loan-service-image /bin/bash
## npm start

