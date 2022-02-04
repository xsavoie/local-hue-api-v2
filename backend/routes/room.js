const express = require('express');
const room = express.Router();
const axios  = require('axios');
require('dotenv').config();
const { bridge, axiosConfig } = require("./hueApiData");

room.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/room`,
      axiosConfig
    );
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data)
  } catch (error) {
    console.log(error);
  }
});

module.exports = room;
