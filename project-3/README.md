# Docker Project

A simple Docker project designed for learning about containers.

## Overview
This project provides a basic setup for understanding how Docker works. It includes a simple Python API using Flask that connects to a MySQL database, both running inside Docker containers, making it easy to deploy and experiment with containerized applications.

## Features
- Uses a container with Python.
- Utilizes a `requirements.txt` file inside the container.
- Runs a MySQL database inside a container.
- Provides a basic Docker setup for learning.
- Include a basic `docker-compose.yml` setup
- Easy to build and run using Docker commands.

## Requirements
- [Docker](https://www.docker.com/) installed on your system.

## Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/danielVaini/docker-playground.git
   cd docker-playground
   cd project-3
   ```
2. Build and run the Docker image:
   ```sh
   docker-compose up --build
   ```

3. Open your browser and visit `http://localhost:5000/` to see the running project.

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.