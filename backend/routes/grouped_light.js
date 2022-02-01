const express = require('express');
const grouped_light = express.Router();
const axios  = require('axios');
require('dotenv').config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;

grouped_light.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/grouped_light`,
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
  // res.send('test -- grouped_light');
});

module.exports = grouped_light;
