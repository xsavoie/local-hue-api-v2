import "./App.css";
import Lights from "./components/Light";
import useHueData from "./hooks/useHueData";

function App() {
  const { lights, setLights, groupedLights, setGroupLights, loading } =
    useHueData();

  // console.log("light", lights)
  // console.log("groupedLight", groupedLight)

  if (loading) return <p>Getting Hue Data...</p>;
  
  return (
    <div className="App">
      <Lights lights={lights} setLights={setLights} />
    </div>
  );
}

export default App;
