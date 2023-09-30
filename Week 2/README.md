# Distributed WebSocket Chat Application with NGINX Load Balancing

This repository contains a simple distributed chat application using WebSocket technology. Users can join chat rooms and exchange messages in real-time. NGINX is used as a reverse proxy to load balance multiple instances of the chat application.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **NGINX**: Ensure NGINX is installed on your machine.

## Getting Started

### Setting up the Node.js Chat Server

1. **Clone this repository** to your local machine:

   ```bash
   git clone <repository-url>
   cd "Week 2"
   ```
   
2. **Install the required Node.js packages**:

   ```bash
   npm install
   ```

3. **Setup a Redis Instance.**: Preferably with Docker

 ```bash
 docker run -d --name redis-server -p 6379:6379
 ```

4. **Start the Node.js chat server.** You can specify the port as an optional argument (default is 3000):

   ```bash
   node server.js -p 3001
   ```
## Setting up NGINX for Load Balancing

5. **Start NGINX with the custom configuration file:** The Config file is named nginx.conf:

   ```bash
   nginx -c /path/to/your/project/nginx.conf
   ```
