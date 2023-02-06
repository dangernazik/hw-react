import {Users} from "./components/users/Users";
import React from "react";

import {Posts} from "./components/posts/Posts";
import {Header} from "./components/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'wrap'}>

            <Users/>
            <Posts/>
            </div>
        </div>
    );
}

export default App;
