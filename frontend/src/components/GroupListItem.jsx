import { useState } from "react";
import BrightnessSlider from "./light-controls/BrightnessSlider";
import ColorPicker from "./light-controls/ColorPicker";
import "../styles/GroupListItem.css";
import ToggleLight from "./light-controls/ToggleLight";
import useHueLight from "../hooks/useHueLight";
import ScenesControl from "./light-controls/ScenesControl";

export default function GroupListItem({
  id,
  name,
  groupedId,
  lightsId,
  lightsInGroup,
  lights,
  setLights,
  groupScenes,
}) {
  const { handleRequest, handleSceneChange } = useHueLight({
    id: lightsId,
    lights,
    setLights,
  });
  const [bri, setBri] = useState(lightsInGroup[0].dimming.brightness);
  const [color, setColor] = useState(lightsInGroup[0].color.xy);
  const [selectedScene, setSelectedScene] = useState("");

  return (
    <div className="list-item--container">
      <header className="list-item--info">
        <h4>{name}</h4>
        {/* <ExpandedView selected={selected} setSelected={setSelected} id={id}/> */}
      </header>
      <div className="list-item--control">
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
        <ScenesControl
          scenes={groupScenes}
          handleSceneChange={handleSceneChange}
          selectedScene={selectedScene}
          setSelectedScene={setSelectedScene}
        />
      </div>
    </div>
  );
}
