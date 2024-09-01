docker builder prune -a
docker buildx prune
docker buildx build -f ./Dockerfile.nginx --platform linux/amd64,linux/arm64 -t yihwanggeun/toss-clone-frontend-image:latest --push .
docker push yihwanggeun/toss-clone-frontend-image:latest
