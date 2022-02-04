const express = require('express');
const grouped_light = express.Router();
const axios  = require('axios');
require('dotenv').config();
const { bridge, axiosConfig } = require("./hueApiData");

grouped_light.get('/', async function(req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/grouped_light`,
      axiosConfig
    );
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data)
  } catch (error) {
    console.log(error);
  }
});

module.exports = grouped_light;
