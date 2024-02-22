// Create Web Server

// Required modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];

// Set up the app
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Create server
http.createServer(app).listen(3000);
console.log('Server listening on port 3000');

// Handle POST request
app.post('/comment', function(req, res) {
    var comment = req.body;
    console.log('Adding comment: ' + JSON.stringify(comment));
    comments.push(comment);
    res.status(201).send(comment);
});

// Handle GET request
app.get('/comment', function(req, res) {
    res.status(200).send(comments);
});

// Handle DELETE request
app.delete('/comment', function(req, res) {
    comments = [];
    res.status(204).send('All comments deleted');
});