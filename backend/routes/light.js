const express = require("express");
const light = express.Router();
const axios = require("axios");
require("dotenv").config();
const { bridge, axiosConfig } = require("./hueApiData");

light.get("/", async function (req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/light`,
      axiosConfig
    );
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data);
  } catch (error) {
    console.log(error);
  }
});

light.put("/:id", async function (req, res) {
  const id = req.params.id;
  const body = req.body;

  try {
    const apiResponse = await axios.put(
      `https://${bridge}/clip/v2/resource/light/${id}`,
      body,
      axiosConfig
    );
    // console.log(apiResponse.data)
    res.json(apiResponse.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = light;
