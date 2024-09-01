docker buildx build -f ./Dockerfile --platform linux/amd64,linux/arm64 -t yihwanggeun/account-service-image:latest --push .
docker push yihwanggeun/account-service-image:latest
