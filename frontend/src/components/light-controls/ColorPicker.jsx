import { useState, useCallback, useRef } from "react";
import { RgbColorPicker } from "react-colorful";
import useClickOutside from "../../hooks/useClickOutside";
import { xyColorCoverter, rgbColorConverter } from "../../lib/colorConverters";
import "../../styles/ColorPicker.css";

export default function ColorPicker({ id, color, setColor, bri, handleRequest }) {
  // convert brightness on a scale of 254 to be converted
  let parsedBri = parseInt((bri * 254) / 100);
  const [lastColor, setLastColor] = useState(rgbColorConverter(color, parsedBri));

  const handleChange = (newColor) => {
    const xyColor = xyColorCoverter(newColor);
    setLastColor(newColor);
    setColor(xyColor.xy);
    const body = { color: xyColor };
    handleRequest(id, body);
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
