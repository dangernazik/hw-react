import React from 'react';

const Launch = ({name, year, image}) => {

    return (
            <div className={'wrap-spacex'}>
                <h1><b style={{color: '#bf0b41'}}>Mission name:</b> { name }</h1>
                <p><b style={{color: '#bf0b41'}}>Launch year:</b>  { year }</p>
                <img src={ image } alt={ name }/>
            </div>
    );
};

export {Launch};