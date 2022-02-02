import { useState, useCallback, useRef } from "react";
import { RgbColorPicker } from "react-colorful";
import useClickOutside from "../../hooks/useClickOutside";
import useHueLight from "../../hooks/useHueLight";
import { xyColorCoverter, rgbColorConverter } from "../../lib/colorConverters";
import "../../styles/ColorPicker.css";

export default function ColorPicker({ color, setColor, bri, handleChangeColor }) {
  // const { color, setColor, bri, handleChangeColor } = props;
  // const { handleChangeColor } = useHueLight(props);

  let parsedBri = parseInt(bri * 254 / 100);

  const [lastColor, setLastColor] = useState(rgbColorConverter(color, parsedBri));

  const handleChange = (newColor) => {
    const xyColor = xyColorCoverter(newColor);
    console.log("xyColor", xyColor)
    console.log("newcolor", newColor);
    setLastColor(newColor);
    setColor(xyColor.xy);
    handleChangeColor({ color: xyColor });
  };

  // popover colorpicker
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{
          backgroundColor: `rgb(${lastColor["r"]}, ${lastColor["g"]}, ${lastColor["b"]})`,
        }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div className="popover" ref={popover}>
          <RgbColorPicker color={lastColor} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}
