import React from 'react';

import {carService} from "../../services";

const Car = ({car, setUpdateCar}) => {
    const {id, brand, price, year} = car

    const onRemove = async ()=> {
        carService.deleteById(id)
    };

    return (
        <div>
            <div>id: { id }</div>
            <div>brand: { brand }</div>
            <div>price: { price }</div>
            <div>year: {year }</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={() => onRemove(car.id) }>Delete</button>
        </div>
    );
};

export {Car};