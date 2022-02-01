import axios from "axios";
// import { updateState } from "../lib/updateState";

export default function useHueLight({ id, lights, setLights }) {
  // const { id, lights, setLights } = props;

  const hueApiRequest = async (body) => {
    try {
      console.log('pizza')
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
      // setLights(updateState(params, lights, id));
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLightChange };
}
