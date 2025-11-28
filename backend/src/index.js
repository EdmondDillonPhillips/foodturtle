const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Food Turtle backend alive!' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
const logger = require('./logger');
logger.info('Food Turtle backend started', { port: process.env.PORT || 3001 });
