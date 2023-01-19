import {Users} from "./components/users/Users";
import {Launches} from "./components/spaceX/Launches";
import React from "react";

function App() {
  return (
    <div className="App">
         <Users />

      <hr className={'hr'}/>
        <Launches />
    </div>
  );
}

export default App;
