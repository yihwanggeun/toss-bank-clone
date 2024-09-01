docker buildx build -f ./Dockerfile --platform linux/amd64,linux/arm64 -t yihwanggeun/product-service-image:latest --push .
docker push yihwanggeun/product-service-image:latest
