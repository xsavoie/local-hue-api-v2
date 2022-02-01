import LightContainer from "./LightContainer";

export default function Lights({ lights, setLights }) {
  const lightContainers = lights.map((light) => (
    <LightContainer
      key={light.id}
      id={light.id}
      name={light.metadata.name}
      lightInfo={light}
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
