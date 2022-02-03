import { useEffect, useState } from "react";
import axios from "axios";

export default function useHueData() {
  const [loading, setLoading] = useState(false);
  const [lights, setLights] = useState([]);
  const [groupedLights, setGroupedLights] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [scenes, setScenes] = useState([]);

  async function fetchLightsApi() {
    try {
      const apiResponse = await axios.get("/api/light");
      setLights(apiResponse.data.reverse());
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

  async function fetchRoomApi() {
    try {
      const apiResponse = await axios.get("/api/room");
      setRooms(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchSceneApi() {
    try {
      const apiResponse = await axios.get("/api/scene");
      setScenes(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchAllApi() {
      setLoading(true);
      await fetchLightsApi();
      await fetchGroupedLightApi();
      await fetchRoomApi();
      fetchSceneApi();
      setLoading(false);
    }

    fetchAllApi();
  }, []);

  return {
    lights,
    setLights,
    groupedLights,
    setGroupedLights,
    rooms,
    setRooms,
    loading,
    scenes,
    setScenes
  };
}
