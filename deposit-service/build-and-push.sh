docker buildx build -f ./Dockerfile --platform linux/amd64,linux/arm64 -t yihwanggeun/deposit-service-image:latest --push .
docker push yihwanggeun/deposit-service-image:latest
