import React, {useEffect, useState} from 'react';
import {Launch} from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(  () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launch => {
                setLaunches(launch)
            })
    }, [])
    return (

        <div className={'spacex'}>
            <h1>SPACE<b style={{color: '#bf0b41'}}>X</b></h1>
            {
                launches.filter(launch => launch.launch_year !== "2020")
                    .map(launch => <Launch key={launch.id} name={launch.mission_name} image={launch.links.mission_patch_small} year={launch.launch_year}/>)
            }
        </div>
    );
};

export {Launches};