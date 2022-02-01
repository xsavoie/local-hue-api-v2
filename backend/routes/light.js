const axios  = require('axios');
const express = require('express');
const light = express.Router();
require('dotenv').config();


const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;

light.get('/', async function(req, res) {
  // console.log("bridge", bridge)
  // console.log("username", username)
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/light`,
      {
        headers: {
          "hue-application-key": username,
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
      }
    );
    console.log(apiResponse.data.data)
    res.json(apiResponse.data.data)
  } catch (error) {
    console.log(error);
  }
  // res.send('test -- light');
});

module.exports = light;
