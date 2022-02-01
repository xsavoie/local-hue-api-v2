const express = require('express');
const scene = express.Router();

scene.get('/', function(req, res) {
  res.send('test -- scene');
});

module.exports = scene;
