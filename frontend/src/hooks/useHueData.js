import { useEffect, useState } from "react";
import axios from "axios";

export default function useHueData() {
  const [lights, setLights] = useState([]);
  const [groupedLights, setGroupedLights] = useState([]);


  async function fetchLightsApi() {
    try {
      const apiResponse = await axios.get("/api/light");
      setLights(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGroupedLightApi() {
    try {
      const apiResponse = await axios.get("/api/grouped_light");
      setGroupedLights(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLightsApi();
    fetchGroupedLightApi();
  },[])

  return { lights, setLights, groupedLight: groupedLights, setGroupedLight: setGroupedLights }
}
