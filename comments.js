// Create Web Server
// Create a Web Server that listens on port 3000. It should respond to requests for /comments with a JSON string. Use the provided comments array as the JSON string.

const http = require('http');

const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
});

server.listen(3000);
console.log('Server listening on port 3000');