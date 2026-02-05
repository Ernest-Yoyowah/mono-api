#!/bin/bash

folders=(controllers services jobs middlewares utils config types models)
files=(
  "server.ts"
  "controllers/healthController.ts"
  "services/healthService.ts"
  "jobs/exampleJob.ts"
  "middlewares/errorHandler.ts"
  "utils/logger.ts"
  "config/index.ts"
  "types/index.d.ts"
  "models/exampleModel.ts"
)

for folder in "${folders[@]}"; do
  [ -d "src/$folder" ] || mkdir "src/$folder"
done

for file in "${files[@]}"; do
  [ -f "src/$file" ] || touch "src/$file"
done

echo "Missing project folders and files initialized."