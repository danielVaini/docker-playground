# Docker Project

A simple Docker project designed for learning about containers.

## Overview
This project provides a basic setup for understanding how Docker works. It includes a simple Node JS API using Express running inside Docker containers, making it easy to deploy and experiment with multi-stage applications.

## Features
- Uses a container with Node JS.
- Utilizes a `package.json` file inside the container.
- Runs a API inside a container.
- Provides a basic Docker setup for learning.
- Easy to build and run using Docker commands.

## Requirements
- [Docker](https://www.docker.com/) installed on your system.

## Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/danielVaini/docker-playground.git
   cd docker-playground
   cd project-4
   ```
2. Build the Docker image:
   ```sh
   docker build -t node-multi-stage .
   ```
3. Run the container
  ```sh
  docker run -p 3000:3000 node-multi-stage
  ```

4. Open your browser and visit `http://localhost:3000/` to see the running project.

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.