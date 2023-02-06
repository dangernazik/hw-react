import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const { name , id, username} = user
    const dispatch = useDispatch()
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={() =>dispatch(userActions.setSelectedUser(user))}>click</button>
        </div>
    );
};

export {User};