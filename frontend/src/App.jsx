import "./App.css";
import Groups from "./components/Groups";
import Lights from "./components/Light";
import useHueData from "./hooks/useHueData";
import { GroupStateProvider } from "./lib/groupState";

function App() {
  const {
    lights,
    setLights,
    groupedLights,
    setGroupLights,
    rooms,
    setRooms,
    loading,
    scenes,
    setScenes
  } = useHueData();

  // console.log("light", lights)
  // console.log("groupedLight", groupedLight)
  // console.log('rooms', rooms)
  console.log('scenes', scenes)

  if (loading) return <p>Getting Hue Data...</p>;

  return (
    <GroupStateProvider>
      <div className="App">
        {/* <Lights lights={lights} setLights={setLights} /> */}
        <Groups rooms={rooms} lights={lights} setLights={setLights} scenes={scenes} />
      </div>
    </GroupStateProvider>
  );
}

export default App;
