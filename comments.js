
// Create Web Server

// 1. Import the http module
var http = require('http');

// 2. Create a server
var server = http.createServer(function(req, res) {
  // 3. Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 4. Send the response body "Hello World"
  res.end('Hello World\n');
});

// 5. Prints a log once the server starts listening
server.listen(8080, 'Server is running');