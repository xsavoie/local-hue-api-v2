import { useState } from "react";
import useHueLight from "../hooks/useHueLight";
import { useGroupState } from "../lib/groupState";
import {
  getAllLightsForGroup,
  lightsIdForRoom,
} from "../lib/lightGroupHelpers";
import { parseScenes } from "../lib/scenesHelper";
import "../styles/GroupExpanded.css";

export default function GroupExpanded({ rooms, lights, setLights, scenes }) {
  const { selected, setSelected } = useGroupState();

  const selectedRoom = rooms.filter((room) => room.id === selected);
  const roomData = selectedRoom[0];

  const groupLightId = lightsIdForRoom(roomData);
  const groupLights = getAllLightsForGroup(groupLightId, lights);
  const groupScenes = parseScenes(roomData, scenes);

  const { handleRequest, handleSceneChange } = useHueLight({
    lights,
    setLights,
  });
  const [bri, setBri] = useState(groupLights[0].dimming.brightness);
  const [color, setColor] = useState(groupLights[0].color.xy);
  const [selectedScene, setSelectedScene] = useState("");


  console.log(groupScenes);

  return (
    <div className="group-expanded">
      <header className="expanded--header">
        <p>{roomData.metadata.name}</p>{" "}
        <button type="button" onClick={() => setSelected("")}>
          &times;
        </button>
      </header>
      <div className="expanded--control">
        {/* <ToggleLight
          id={lightsId}
          lightInfo={lightsInGroup[0]}
          handleRequest={handleRequest}
        /> */}
        {/* <BrightnessSlider
          id={lightsId}
          bri={bri}
          setBri={setBri}
          handleRequest={handleRequest}
        /> */}
        {/* <ColorPicker
          id={lightsId}
          color={color}
          bri={bri}
          setColor={setColor}
          handleRequest={handleRequest}
        /> */}
        {/* <ScenesControl
          scenes={groupScenes}
          handleSceneChange={handleSceneChange}
          selectedScene={selectedScene}
          setSelectedScene={setSelectedScene}
        /> */}
      </div>
    </div>
  );
}
