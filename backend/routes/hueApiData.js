const bridge = process.env.HUE_BRIDGE;
const username = process.env.HUE_USERNAME;
const axiosConfig = {
  headers: {
    "hue-application-key": username,
  },
};

module.exports = { bridge, axiosConfig }