#!/bin/bash
# Function to perform the necessary actions on git push
echo "Git push detected. Performing auto-update..."
git pull
 if [ $? -ne 0 ]; then
    echo "Error: Unable to perform git pull. Aborting auto-update."
    exit 1
 fi
echo "Stopping existing Docker containers..."
docker-compose down
echo "Building Docker services..."
docker-compose build
echo "Starting Docker containers..."
docker-compose up -d
echo "Auto-update completed successfully."
