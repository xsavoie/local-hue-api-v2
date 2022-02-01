const express = require('express');
const light = express.Router();

light.get('/', function(req, res) {
  res.send('test -- light');
});

module.exports = light;
