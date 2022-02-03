import useHueLight from "../hooks/useHueLight";
import "../styles/GroupGridItem.css";
import { useState } from "react";
import BrightnessSlider from "./light-controls/BrightnessSlider";
// import useHueGroup from "../hooks/useHueGroup";
import ToggleLight from "./light-controls/ToggleLight";
import ColorPicker from "./light-controls/ColorPicker";
// import ScenesDropdown from "./light-controls/ScenesDropdown";
// import ExpandedView from "./ExpandView";
// import ScenesContainer from "./light-controls/ScenesContainer";

export default function GroupContainer({ id, name, groupedId, lightsId, lightsInGroup, lights, setLights }) {
  const { handleRequest } = useHueLight({ id: lightsId, lights, setLights });
  const [bri, setBri] = useState(lightsInGroup[0].dimming.brightness);
  const [color, setColor] = useState(lightsInGroup[0].color.xy);
  console.log("!!!", lightsId)
  // const parsedScenes = scenes.filter((scene) => scene.group === id);

  return (
    <div className="grid-item--container">
      <header className="grid-item--info">
        <h4>
          {name} id: {id}
        </h4>
        {/* <ExpandedView selected={selected} setSelected={setSelected} id={id}/> */}
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
        {/* <ScenesDropdown
            scenes={parsedScenes}
            handleSceneChange={handleGroupChange}
          /> */}
        {/* <ScenesContainer scenes={parsedScenes} handleSceneChange={handleGroupChange} /> */}
      </div>
    </div>
  );
}
