const express = require('express');
const scene = express.Router();
const axios  = require('axios');
require('dotenv').config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;

scene.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/scene`,
      {
        headers: {
          "hue-application-key": username,
        },
      }
    );
    console.log(apiResponse.data.data)
    res.json(apiResponse.data.data)
  } catch (error) {
    console.log(error);
  }
  // res.send('test -- scene');
});

module.exports = scene;
