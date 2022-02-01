import './App.css';
import Lights from './components/Light';
import useHueData from './hooks/useHueData';

function App() {

  const { lights, setLights, groupedLights, setGroupLights } = useHueData();

  console.log(lights[0])
  console.log(lights[1])
  // console.log("light", lights)
  // console.log("groupedLight", groupedLight)

  return (
    <div className="App">
      <Lights lights={lights} setLights={setLights} />
    </div>
  );
}

export default App;
