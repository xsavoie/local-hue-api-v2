import ToggleLight from "./light-controls/ToggleLight";
import "../styles/LightContainer.css";
import ColorPicker from "./light-controls/ColorPicker";
import BrightnessSlider from "./light-controls/BrightnessSlider";
import { useState } from "react";
import useHueLight from "../hooks/useHueLight";

export default function LightContainer({ id, name, lightInfo, lights, setLights }) {
  const [bri, setBri] = useState(lightInfo.dimming.brightness);
  const [color, setColor] = useState(lightInfo.color.xy);
  const { handleRequest } = useHueLight({lights, setLights});

  return (
    <div className="light-container">
      <div className="light-info">
        <h4>{name}</h4>
        <h4>id: {id}</h4>
      </div>
      <div>
        <ToggleLight id={id} lightInfo={lightInfo} handleRequest={handleRequest} />
        <BrightnessSlider
          id={id}
          bri={bri}
          setBri={setBri}
          handleRequest={handleRequest}
        />
        <ColorPicker
          id={id}
          bri={bri}
          color={color}
          setColor={setColor}
          handleRequest={handleRequest}
        /> 
      </div>
    </div>
  );
}
