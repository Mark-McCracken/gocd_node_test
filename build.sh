#!/bin/sh

docker build -t ${GO_PIPELINE_NAME}/run:latest -f Dockerfile.run .
docker build -t ${GO_PIPELINE_NAME}/checks:latest -f Dockerfile.checks .
docker build -t ${GO_PIPELINE_NAME}/undo:latest -f Dockerfile.undo .
docker build -t ${GO_PIPELINE_NAME}/anomaly-detection:latest -f Dockerfile.anomaly-detection .
