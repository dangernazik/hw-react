import React, {useEffect, useState} from 'react';
import {User} from "./User";
import {axiosService} from "../../services/axiosService";


const Users = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {axiosService.get('/users').then(value => value.data).then(value => setUsers([...value]))}, [])

    return (

        <div className={'wrap'}>
            {users.map(user => <User key={user.id}  user={user} />)}
        </div>
    );
};

export {Users};