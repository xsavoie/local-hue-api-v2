import axios from "axios";
import { updateLightsState } from "../lib/updateLightsState.js";

export default function useHueLight({ id, lights, setLights }) {

  const hueApiRequest = async (body) => {
    try {
      await axios.put(
        `/api/light/${id}`,
        body
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleLightChange = async (body) => {
    try {
      const request = await hueApiRequest(body);
      setLights(updateLightsState(body, lights, id));
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLightChange };
}
