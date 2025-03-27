# Docker Project

A simple Docker project designed for learning about containers.

## Overview
This project provides a basic setup for understanding how Docker works. It includes a simple Python script, making it easy to deploy and experiment with containerized applications.

## Features
- Uses a container with Python.
- Utilizes a `requirements.txt` file inside the container.
- Provides a basic Docker setup for learning.
- Easy to build and run using Docker commands.

## Requirements
- [Docker](https://www.docker.com/) installed on your system.

## Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/danielVaini/docker-playground.git
   cd docker-playground
   cd project-2
   ```
2. Build the Docker image:
   ```sh
   docker build -t my-docker-project .
   ```
3. Run the container:
   - **Mac/Linux**:
     ```sh
     docker run -v $(pwd)/data:/app/data python-script
     ```
   - **Windows**:
     ```sh
     docker run -v ${PWD}/data:/app/data python-script
     ```
4. View the results in the terminal.

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.