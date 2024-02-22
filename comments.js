// Create Web Server
// Create a new Express application
// Create a new Router
// Create a new route
// Return a response from the route
// Start the server

const express = require('express');
const app = express();
const commentsRouter = express.Router();

commentsRouter.get('/', (req, res) => {
  res.send('Comments');
});

app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});