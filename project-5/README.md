# Docker Project

A simple Docker project designed for learning about containers.

## Overview
This project provides a basic setup for understanding how Docker works. It includes a simple deep learning pipeline with Yolo running inside Docker containers, making it easy to deploy and experiment with multi-stage applications.

## Features
- Uses a container with Yolov11.
- Utilizes a `requirements.txt` file inside the container.
- Runs a Model train inside a container.
- Provides a basic Docker setup for learning.
- Easy to build and run using Docker commands.

## Requirements
- [Docker](https://www.docker.com/) installed on your system.

## Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/danielVaini/docker-playground.git
   cd docker-playground
   cd project-5
   ```
2. Build and run the Docker image:
   ```sh
   docker-compose up
   ```
  - Optional flag: Use --build to force a rebuild of the image:
  ```sh
  docker-compose up --build
  ```
3. Open your browser and visit http://localhost:8888/lab?token=<your-token> to access the running project. Check your terminal for the actual token

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.