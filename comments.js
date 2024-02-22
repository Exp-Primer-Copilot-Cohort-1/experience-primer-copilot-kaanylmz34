// Create Web Server
// Create a web server that's going to send back a list of comments to the client.
// The server should send back some hard-coded comments as an array of objects.
// It should send back the data as JSON.

const http = require('http');

// The server should send back the comments as JSON.
const server = http.createServer((req, res) => {

  // Hard-coded comments as an array of objects.
  const comments = [
    { username: 'user1', comment: 'comment1' },
    { username: 'user2', comment: 'comment2' },
    { username: 'user3', comment: 'comment3' }
  ];

  // Set the Content-Type header to application/json.
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

// Listen on port 3000.
server.listen(3000);

// Log a message to the console.
console.log('Server is listening on port 3000...');

// Test the server using Postman or the browser.
