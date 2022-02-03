import { useState } from "react";
import BrightnessSlider from "./light-controls/BrightnessSlider";
import ColorPicker from "./light-controls/ColorPicker";
// import ScenesDropdown from "./light-controls/ScenesDropdown";
import "../styles/GroupListItem.css";
import ToggleLight from "./light-controls/ToggleLight";
import useHueLight from "../hooks/useHueLight";
// import ScenesContainer from "./light-controls/ScenesContainer";

export default function GroupListItem({
  id,
  name,
  groupedId,
  lightsId,
  lightsInGroup,
  lights,
  setLights,
}) {
  const { handleRequest } = useHueLight({ id: lightsId, lights, setLights });
  const [bri, setBri] = useState(lightsInGroup[0].dimming.brightness);
  const [color, setColor] = useState(lightsInGroup[0].color.xy);

  // const parsedScenes = scenes.filter((scene) => scene.group === id);

  return (
    <div className="list-item--container">
      <h4>{name}</h4>
      <ToggleLight
        id={lightsId}
        lightInfo={lightsInGroup[0]}
        handleRequest={handleRequest}
      />
      <BrightnessSlider
        id={lightsId}
        bri={bri}
        setBri={setBri}
        handleRequest={handleRequest}
      />
      <ColorPicker
        id={lightsId}
        color={color}
        bri={bri}
        setColor={setColor}
        handleRequest={handleRequest}
      />
      {/* <ScenesDropdown
        scenes={parsedScenes}
        handleSceneChange={handleGroupChange}
      /> */}
      {/* <ScenesContainer
        scenes={parsedScenes}
        handleSceneChange={handleGroupChange}
      /> */}
    </div>
  );
}
