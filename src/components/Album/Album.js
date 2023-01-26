import React from 'react';
import css from './Album.module.css'

const Album = ({album}) => {

    const {userId, id , title} = album

    return (
        <div className={css.Album}>
            <div><b>userId:</b>{userId}</div>
            <div><b>id:</b>{id}</div>
            <div><b>title:</b>{title}</div>
        </div>
    );
};

export {Album};