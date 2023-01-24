import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {

    const [cars, setCars] = useState([])
    const [updateCar, setUpdateCar] = useState(null)

    useEffect(()=> {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [cars])



  return (
    <div className="App">
      <CarForm setCars={setCars} updateCar={updateCar} />
      <hr/>
      <Cars cars={cars} setUpdateCar={setUpdateCar} />
    </div>
  );
}

export default App;
