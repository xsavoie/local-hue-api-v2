import "./App.css";
import Groups from "./components/Groups";
import Lights from "./components/Light";
import useHueData from "./hooks/useHueData";

function App() {
  const {
    lights,
    setLights,
    groupedLights,
    setGroupLights,
    rooms,
    setRooms,
    loading,
  } = useHueData();

  // console.log("light", lights)
  // console.log("groupedLight", groupedLight)
  // console.log('rooms', rooms)

  if (loading) return <p>Getting Hue Data...</p>;

  return (
    <div className="App">
      {/* <Lights lights={lights} setLights={setLights} /> */}
      <Groups rooms={rooms} lights={lights} setLights={setLights} />
    </div>
  );
}

export default App;
