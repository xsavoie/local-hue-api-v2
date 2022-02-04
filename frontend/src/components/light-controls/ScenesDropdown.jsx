import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ScenesDropdown({
  scenes,
  handleSceneChange,
  selectedScene,
  setSelectedScene,
}) {
  // const [selectedScene, setSelectedScene] = useState('');

  const sceneListItems = scenes.map((scene) => (
    <MenuItem key={scene.id} value={scene.id}>
      {scene.metadata.name}
    </MenuItem>
  ));
  const noScenes = <MenuItem value={null}>No scenes selected</MenuItem>;

  const handleChange = (scene) => {
    setSelectedScene(scene.target.value);
    const request = { recall: { action: "active" } };
    handleSceneChange(scene.target.value, request);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Scene</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedScene}
        label="Scene"
        onChange={handleChange}
      >
        {sceneListItems.length > 1 ? sceneListItems : noScenes}
      </Select>
    </FormControl>
  );
}
