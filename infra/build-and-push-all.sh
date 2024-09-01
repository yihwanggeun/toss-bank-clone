find .. -type f -name "build-and-push.sh" | while read script; do
    echo "Executing $script..."
    (cd "$(dirname "$script")" && bash "$(basename "$script")")
done