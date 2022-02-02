import Slider from "@mui/material/Slider";

export default function BrightnessSlider({ id, bri, setBri, handleRequest }) {
  const handleChange = (event, newValue) => {
    setBri(newValue);
    const body = { dimming: { brightness: newValue } };
    handleRequest(id, body);
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
