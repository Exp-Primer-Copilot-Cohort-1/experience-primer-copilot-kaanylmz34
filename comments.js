// Create Web Server
// Simple and easy to use
const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');

// Set static file
app.use('/static', express.static('public'))

// Set route
app.get('/', (req, res) => {
  res.render('index');
});

// Set route
app.get('/about', (req, res) => {
  res.render('about');
});

// Set route
app.get('/project', (req, res) => {
  res.render('project');
});

// Set route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Set route
app.get('/error', (req, res) => {
  res.render('error');
});

// Set route
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// Set error route
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Create server
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});