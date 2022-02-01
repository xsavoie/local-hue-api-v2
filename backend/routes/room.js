const express = require('express');
const room = express.Router();
const axios  = require('axios');
require('dotenv').config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;

room.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/room`,
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

module.exports = room;
