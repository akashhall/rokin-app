// import http from 'http'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const server = http.createServer(app);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('*', (req, res) => {
    console.log('pata nahi yr');
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('*', (req, res) => {
    console.log('pata nahi yr post', req, res);
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});