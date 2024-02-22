// Create Web Server
// Create a Web Server that listens to the port 8080
// Create a Web Server that listens to the port 8080
// When a client makes a request to the server, the server should respond with the following:
// A status code of 200
// A Content-Type of text/plain
// The body of the response should be the following string: "OK"

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK');
});

server.listen(8080, () => {
  console.log('Server is listening on http://localhost:8080');
});