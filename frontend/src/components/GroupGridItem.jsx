import useHueData from "../hooks/useHueData";
import useHueLight from "../hooks/useHueLight";
import "../styles/GroupGridItem.css";
// import { useState } from "react";
// import BrightnessSlider from "./light-controls/BrightnessSlider";
// import useHueGroup from "../hooks/useHueGroup";
import ToggleLight from "./light-controls/ToggleLight";
// import ColorPicker from "./light-controls/ColorPicker";
// import ScenesDropdown from "./light-controls/ScenesDropdown";
// import ExpandedView from "./ExpandView";
// import ScenesContainer from "./light-controls/ScenesContainer";

export default function GroupContainer({ id, name, groupedId, groupLights }) {
  // console.log("id", id)
  // console.log("name", name)
  // console.log("groupedId", groupedId)
  // console.log("children", children)

  const { lights, setLights } = useHueData();
  // const lightsArray = groupLights.map((light) => light.rid);
  const { handleLightChange } = useHueLight({ id, lights, setLights });

  // need an array of lightsData that are in this group
  function parseGroupLights(lightIdArray, lights) {
    let arrayOfLights = [];
    lightIdArray.forEach((id) => {
      lights.map((light) => {
        if (light.id === id) {
          arrayOfLights.push(light);
        }
      });
    });
    return arrayOfLights;
  }

  const parsedLights = parseGroupLights(groupLights, lights);

  // const { name, id, state, scenes, selected, setSelected } = props;
  // const [bri, setBri] = useState(state.bri);
  // const [color, setColor] = useState(state.xy);

  // const { handleGroupChange } = useHueGroup(props);

  // const parsedScenes = scenes.filter((scene) => scene.group === id);

  return (
    <div className="grid-item--container">
      <header className="grid-item--info">
        <h4>
          {name} {id}
        </h4>
        {/* <ExpandedView selected={selected} setSelected={setSelected} id={id}/> */}
      </header>
      <div className="grid-item--control">
        <ToggleLight
          id={id}
          lightInfo={parsedLights[0]}
          handleToggle={handleLightChange}
        />
        {/* <BrightnessSlider
            id={id}
            bri={bri}
            setBri={setBri}
            handleBrightness={handleGroupChange}
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
