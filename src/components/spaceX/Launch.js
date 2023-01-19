import React from 'react';

const Launch = ({name, year, image}) => {

    return (
        <div>
            <h1>Mission name: { name }</h1>
            <p>Launch date: { year }</p>
            <img src={ image } alt={ name }/>
        </div>
    );
};

export {Launch};