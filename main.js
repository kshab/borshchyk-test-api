'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) =>  {
  console.log('Hello');
  res.status(200).json({ created: 'test' });
});

app.post('/order', async (req, res) => {
  const { order } = req.body;
  console.log(`${req.socket.remoteAddress} POST /order ${order}`);
  res.status(201).json({ created: order });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
