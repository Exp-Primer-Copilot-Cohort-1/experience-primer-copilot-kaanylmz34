// Create Web Server
// Create a web server that listens on port 3000
// Index (so / url) should return a welcome message and returns a 200 status code
// Comments (so /comments) should return a list of comments from a variable and returns a 200 status code
// If the server receives a request to any other route, it should return a 404 status code

const http = require('http');

const comments = [
    { username: 'Alice', comment: 'I love cheese' },
    { username: 'Bob', comment: 'Where are the cookies?' },
    { username: 'Carol', comment: 'This is a comment' }
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our comments server!');
    } else if (req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});