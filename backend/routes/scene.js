const express = require("express");
const scene = express.Router();
const axios = require("axios");
require("dotenv").config();
const { bridge, axiosConfig } = require("./hueApiData");

scene.get("/", async function (req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/scene`,
      axiosConfig
    );
    console.log(bridge)
    res.json(apiResponse.data.data);
  } catch (error) {
    console.log(bridge)
    console.log(error);
  }
});

scene.put("/:id", async function (req, res) {
  const id = req.params.id;
  const body = req.body;

  try {
    const apiResponse = await axios.put(
      `https://${bridge}/clip/v2/resource/scene/${id}`,
      body,
      axiosConfig
    );
    res.json(apiResponse.data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = scene;
