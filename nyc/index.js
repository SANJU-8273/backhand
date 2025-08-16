require('dotenv').config();
const express = require('express');
const app = express();

// Use PORT from .env or fallback to 3000
const port = process.env.PORT || 3000;
const data = {
    "name": "backhand",
    "version": "1.0.0",
    "description": "A simple Express app",
    "main": "index.js",
    "scripts": {
        "start": "node index.js"
    },
    "author": "",
    "license": "ISC"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.get('/data',(req, res) => {
    res.json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
