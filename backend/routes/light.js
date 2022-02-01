const express = require('express');
const light = express.Router();
const axios  = require('axios');
require('dotenv').config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;

light.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/light`,
      {
        headers: {
          "hue-application-key": username,
        },
      }
    );
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data)
  } catch (error) {
    console.log(error);
  }
});

module.exports = light;
