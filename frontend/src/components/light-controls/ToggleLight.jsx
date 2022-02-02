import { Switch } from "@mui/material";

export default function ToggleLight({ id, lightInfo, handleRequest }) {
  let on = lightInfo?.on?.on;
  const body = { on: { on: !on } };

  return (
    <div>
      <Switch
        checked={on === undefined ? false : on}
        onClick={() => handleRequest(id, body)}
      />
    </div>
  );
}
