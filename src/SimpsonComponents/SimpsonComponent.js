import React from 'react';
import './SimpsonComponent.css';
export const SimpsonComponent = (props) => {
    let {name, url} = props;

    return (
        <div>
            <h2 className={'name'}>{name}</h2>
            <img className={'image'} src={url} alt=""/>
        </div>
    );
};

