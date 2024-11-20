const express = require('express');
const app = express();

// Example API route
app.get('/', (req, res) => {
  res.send('Hello from Vercel!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
