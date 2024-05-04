const express = require('express');
const app = express();
const port = 3000; // Change the port number if needed

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello World!'); // Replace with your own response or HTML template
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
