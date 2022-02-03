import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function ScenesDropdown({ scenes, handleSceneChange, selectedScene, setSelectedScene }) {

  // const [selectedScene, setSelectedScene] = useState('');

  const listItems = scenes.map(scene => <MenuItem key={scene.id} value={scene.id}>{scene.name}</MenuItem>);
  const noScenes = <MenuItem value={null}>No scenes selected</MenuItem>

  
  const handleChange = (scene) => {
    setSelectedScene(scene.target.value);
    const request = { scene: scene.target.value};
    handleSceneChange(request);
    console.log(scene.target.value);
  }


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
        {listItems.length > 1 ? listItems : noScenes}
      </Select>
    </FormControl>
  );
}
