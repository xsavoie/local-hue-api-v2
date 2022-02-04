import axios from "axios";
import { updateLightsState } from "../lib/updateLightsState.js";

export default function useHueLight({ lights, setLights, sceneId }) {

  // API request to modify light/group
  const hueApiRequest = async (id, body) => {
    try {
      await axios.put(`/api/light/${id}`, body);
    } catch (err) {
      console.log(err);
    }
  };

  // API request to modify scenes
  const hueSceneApiRequest = async (id, body) => {
    try {
      await axios.put(`/api/scene/${id}`, body);
    } catch (err) {
      console.log(err);
    }
  }

  // single light handler, accepts string as id
  const handleLightChange = async (id, body) => {
    try {
      const request = await hueApiRequest(id, body);
      setLights(updateLightsState(body, lights, id));
    } catch (error) {
      console.log(error);
    }
  };

  // multiple light handler, accepts array of strings as id
  const handleGroupChange = async (id, body) => {
    id.forEach((req) => {
      handleLightChange(req, body);
    });
  };

  const handleSceneChange = async (id, body) => {
    try {
      const request = await hueSceneApiRequest(id, body);
      // UPDATE STATE
    } catch (error) {
      console.log(error);
    }
  }


  const handleRequest = async (id, body) => {
    if (Array.isArray(id)) {
      id.forEach((req) => {
        handleLightChange(req, body);
      });
    } else {
      return handleLightChange(id, body);
    }
  };

  return { handleRequest, handleSceneChange };
}
