import axios from "axios";
import { updateLightsState } from "../lib/updateLightsState.js";

export default function useHueLight({ lights, setLights }) {
  const hueApiRequest = async (id, body) => {
    try {
      await axios.put(`/api/light/${id}`, body);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLightChange = async (id, body) => {
    try {
      const request = await hueApiRequest(id, body);
      setLights(updateLightsState(body, lights, id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGroupChange = async (id, body) => {
    id.forEach((req) => {
      handleLightChange(req, body);
    });
  };

  const handleRequest = async (id, body) => {
    if (Array.isArray(id)) {
      id.forEach((req) => {
        handleLightChange(req, body);
      });
    } else {
      return handleLightChange(id, body);
    }
  };

  return { handleRequest };
}
