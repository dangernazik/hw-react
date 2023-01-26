import React from 'react';
import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId, id , title, completed} = todo

    return (
        <div className={css.Todo}>
            <div><b>userId:</b>{userId}</div>
            <div><b>id:</b>{id}</div>
            <div><b>title:</b>{title}</div>
            <div><b>completed:</b>{completed}</div>
        </div>
    );
};

export {Todo};