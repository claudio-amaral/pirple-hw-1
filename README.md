# The Node.JS Master Course
Homework Assignment #1

## The Assignment:

Create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## How to test

1. Download the repository
2. Access the folder where the files were unzipped
3. On the terminal, run node index.js to start the server
5. Open another terminal
6. Run curl http://localhost:3000/hello. The server will return the JSON message: "{" message ":" Hello World! "}"
7. Run curl http://localhost:3000 or any other route. The server returns the message: "{}"
