import { Switch } from "@mui/material";

export default function ToggleLight({ lightInfo, handleToggle }) {
  let on = lightInfo.on.on;

  return (
    <div>
      <Switch
      checked={on}
      onClick={() => handleToggle({"on": {"on": !on}})}
      />
    </div>
  );
}
