import React, {useEffect} from 'react';
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {User} from "./User";

const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(()=> {

        userService.getAll().then(({data})=> dispatch(userActions.getAll(data)))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};