// Create Web Server
// Create a web server that listens on port 3000 and serves the following responses:
// / - Hello, World!
// /cats - Meow!
// /dogs - Woof!
// /cats_and_dogs - Living together

const http = require('http');

const server = http.createServer((req, res) => {
    // Response html header
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === '/') {
        res.end('Hello, World!');
    } else if (req.url === '/cats') {
        res.end('Meow!');
    } else if (req.url === '/dogs') {
        res.end('Woof!');
    } else if (req.url === '/cats_and_dogs') {
        res.end('Living together');
    } else {
        res.end('Hello, World!');
    }
});