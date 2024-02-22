// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => res.send('Hello World!'));

// Start Web Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Path: comments.js 