const express = require("express");
const scene = express.Router();
const axios = require("axios");
require("dotenv").config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;
const axiosConfig = {
  headers: {
    "hue-application-key": username,
  },
};

scene.get("/", async function (req, res) {
  try {
    const apiResponse = await axios.get(
      `https://${bridge}/clip/v2/resource/scene`,
      {
        headers: {
          "hue-application-key": username,
        },
      }
    );
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data);
  } catch (error) {
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
    // console.log(apiResponse.data.data)
    res.json(apiResponse.data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = scene;
