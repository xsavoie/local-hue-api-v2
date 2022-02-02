import Slider from "@mui/material/Slider";

export default function BrightnessSlider(props) {
  const { bri, setBri, handleBrightness } = props;

  const handleChange = (event, newValue) => {
    setBri(newValue);
    handleBrightness({ dimming: { brightness: newValue } });
  };

  return (
    <Slider
      defaultValue={bri}
      valueLabelDisplay="auto"
      steps={10}
      min={1}
      max={100}
      value={bri}
      onChange={handleChange}
    />
  );
}
