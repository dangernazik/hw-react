import React, {useEffect, useState} from 'react';
import {User} from "./User";
import {axiosService} from "../../services/axiosService";
import {Post} from "./Post";
import {Posts} from "./Posts";

const Users = () => {
    const [users, setUsers] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {axiosService.get('/users').then(value => value.data).then(value => setUsers([...value]))}, [])

    return (

        <div className={'wrap'}>
            {
                users.map(user => <User key={user.id}  user={user} setPostDetails={setPostDetails}/>)
            }
            <h1>posts</h1>

            {postDetails && <Post post={postDetails}/>}
            <Posts/>
        </div>
    );
};

export {Users};