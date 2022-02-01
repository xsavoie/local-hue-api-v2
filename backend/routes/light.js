const express = require("express");
const light = express.Router();
const axios = require("axios");
require("dotenv").config();

const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;
const axiosConfig = {
  headers: {
    "hue-application-key": username,
  },
};

light.get("/", async function (req, res) {
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
    res.json(apiResponse.data.data);
  } catch (error) {
    console.log(error);
  }
});

light.put("/:id", async function (req, res) {
  // console.log(req);
  // const id = req.query.id;
  const id = req.params.id;

  const body = req.body;

  try {
    const apiResponse = await axios.put(
      `https://${bridge}/clip/v2/resource/light/${id}`,
      body,
      axiosConfig
    );
    // console.log(apiResponse.data)
    res.json(apiResponse.data)
  } catch (error) {
    console.log(error);
  }
});

module.exports = light;
