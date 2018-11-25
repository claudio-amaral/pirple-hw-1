/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http');
var url = require('url');

 // Configure the server to respond to all requests with a JSON message
var server = http.createServer(function(req,res){

  // Parse the url
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Checks the route and sets the message
  var statusCode;
  var message;
  if (trimmedPath == 'hello') {
    statusCode = 200;
    message = '{"message":"Hello World!"}';
  } else {
    statusCode = 404;
    message = '{}';
  }

  // Send the response
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(statusCode);
  res.end(message);

  // Log the request
  console.log('Request received on path: '+trimmedPath);
});

// Start the server
server.listen(3000,function(){
  console.log('The server is up and running now');
});
