'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/order', async (req, res) => {
  const { item } = req.body;
  console.log(`${req.socket.remoteAddress} POST /order ${item}`);
  res.status(201).json({ created: item });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});