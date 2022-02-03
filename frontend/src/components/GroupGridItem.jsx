import useHueData from "../hooks/useHueData";
import useHueLight from "../hooks/useHueLight";
import "../styles/GroupGridItem.css";
import { useState } from "react";
import BrightnessSlider from "./light-controls/BrightnessSlider";
// import useHueGroup from "../hooks/useHueGroup";
import ToggleLight from "./light-controls/ToggleLight";
import { useEffect } from "react";
// import ColorPicker from "./light-controls/ColorPicker";
// import ScenesDropdown from "./light-controls/ScenesDropdown";
// import ExpandedView from "./ExpandView";
// import ScenesContainer from "./light-controls/ScenesContainer";

export default function GroupContainer({ id, name, groupedId, lightsId, lightsInGroup }) {
  const { lights, setLights } = useHueData();
  const { handleRequest } = useHueLight({ id: lightsId, lights, setLights });

  const [bri, setBri] = useState(lightsInGroup[0].dimming.brightness);
  // const [color, setColor] = useState(state.xy);



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
        {/* <BrightnessSlider
            id={id}
            bri={bri}
            setBri={setBri}
            handleRequest={handleRequest}
          /> */}
        {/* <ColorPicker
            id={id}
            color={color}
            bri={bri}
            setColor={setColor}
            handleChangeColor={handleGroupChange}
          /> */}
        {/* <ScenesDropdown
            scenes={parsedScenes}
            handleSceneChange={handleGroupChange}
          /> */}
        {/* <ScenesContainer scenes={parsedScenes} handleSceneChange={handleGroupChange} /> */}
      </div>
    </div>
  );
}
