const express = require('express');
const grouped_light = express.Router();

grouped_light.get('/', function(req, res) {
  res.send('test -- grouped_light');
});

module.exports = grouped_light;
