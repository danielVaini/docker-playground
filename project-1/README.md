# Docker Project

A simple Docker project designed for learning about containers.

## Overview
This project provides a basic setup for understanding how Docker works. It includes a simple web template powered by Bootstrap, making it easy to deploy and experiment with containerized applications.

## Features
- Uses a free Bootstrap template for UI.
- Provides a basic Docker setup for learning.
- Easy to build and run using Docker commands.

## Requirements
- [Docker](https://www.docker.com/) installed on your system.

## Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/danielVaini/docker-playground.git
   cd docker-playground
   cd project-1
   ```
2. Build the Docker image:
   ```sh
   docker build -t my-docker-project .
   ```
3. Run the container:
   ```sh
   docker run -p 8080:80 my-docker-project
   ```
4. Open your browser and visit `http://localhost:8080` to see the running project.

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.