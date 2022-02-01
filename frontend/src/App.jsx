import './App.css';
import useHueData from './hooks/useHueData';

function App() {

  const { lights, setLights } = useHueData();

  console.log(lights)

  return (
    <div className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
