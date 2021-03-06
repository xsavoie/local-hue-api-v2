import useHueLight from "../hooks/useHueLight";
import "../styles/GroupGridItem.css";
import { useState } from "react";
import BrightnessSlider from "./light-controls/BrightnessSlider";
import ToggleLight from "./light-controls/ToggleLight";
import ColorPicker from "./light-controls/ColorPicker";
import ScenesControl from "./light-controls/ScenesControl";
import ExpandView from "./ExpandView";
import { useGroupState } from "../lib/groupState";

export default function GroupContainer({
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
    lights,
    setLights,
  });
  const [bri, setBri] = useState(lightsInGroup[0].dimming.brightness);
  const [color, setColor] = useState(lightsInGroup[0].color.xy);
  const [selectedScene, setSelectedScene] = useState("");
  const { selected, setSelected } = useGroupState();

  return (
    <div className="grid-item--container">
      <header className="grid-item--info">
        <h4>{name}</h4>
        <ExpandView selected={selected} setSelected={setSelected} id={id} />
      </header>
      <div className="grid-item--control">
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
