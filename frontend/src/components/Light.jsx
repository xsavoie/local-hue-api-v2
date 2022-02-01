import LightContainer from "./LightContainer";

export default function Lights({ lights, setLights }) {
  console.log(lights[0])
  const lightContainers = lights.map((light) => (
    <LightContainer
      key={light.id}
      id={light.id}
      name={light.metadata.name}
      state={light.state}
      lights={lights}
      setLights={setLights}
      // scenes={scenes}
    />
  ));

  return (
    <div>
      <h3>Lights</h3>
      <div className="container">{lightContainers}</div>
    </div>
  );
}
