import ToggleLight from "./light-controls/ToggleLight";
import "../styles/LightContainer.css";
// import ColorPicker from "./light-controls/ColorPicker";
// import BrightnessSlider from "./light-controls/BrightnessSlider";
import { useState } from "react";
import useHueLight from "../hooks/useHueLight";
// import useHueLight from "../hooks/useHueLight";

export default function LightContainer({ id, name, lightInfo }) {
  // const { id, name, state } = props;
  // const [bri, setBri] = useState(state.bri);
  // const [color, setColor] = useState(state.xy);

  const { handleLightChange } = useHueLight({id});

  return (
    <div className="light-container">
      <div className="light-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleLight id={id} lightInfo={lightInfo} handleToggle={handleLightChange} />
        {/* <BrightnessSlider
          id={id}
          bri={bri}
          setBri={setBri}
          handleBrightness={handleLightChange}
        /> */}
        {/* <ColorPicker
          id={id}
          bri={bri}
          color={color}
          setColor={setColor}
          handleChangeColor={handleLightChange}
        />  */}
      </div>
    </div>
  );
}
