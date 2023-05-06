import "./App.css";
import Card from "./components/Card";
import ShowHide from "./components/ShowHide";
import vehicles from "./data/vehicles.js";

function App() {

  const vehiclesList = vehicles.map(v => {
    return <Card title={v.name} description={v.description}/>
  })

  return (
    <div className="App">
      <h1>Hola React</h1>
      <div className="container">
        {vehiclesList}

        <ShowHide/>
      </div>
    </div>
  );
}

export default App;
