import { Switch } from "@mui/material";

export default function ToggleLight({ lightInfo, handleToggle }) {
  // console.log(`Light Info ${lightInfo.metadata.name}`, lightInfo.on.on)
  let on = lightInfo.on.on;
  
  return (
    <div>
      <Switch
      checked={on}
      // onClick={() => handleToggle({on: !state.on})}
      />
    </div>
  );
}
