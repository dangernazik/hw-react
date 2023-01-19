import React, {useEffect, useState} from 'react';
import {Launch} from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(  () => {
        fetch('https://api.spacexdata.com/v4/launches/')
            .then(response => response.json())
            .then(launch => {
                setLaunches(launch)
            })
    }, [])
    return (

        <div>
            <h1>SPACEX</h1>
            {
                launches.map(launch => <Launch key={launch.id} name={launch.name} image={launch.links.patch.small} year={launch.date_local}/>)
            }
        </div>
    );
};

export {Launches};