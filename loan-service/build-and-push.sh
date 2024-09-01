docker buildx build -f ./Dockerfile --platform linux/amd64,linux/arm64 -t yihwanggeun/loan-service-image:latest --push .
docker push yihwanggeun/loan-service-image:latest
