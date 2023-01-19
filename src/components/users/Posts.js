import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {axiosService.get('/posts').then(value => value.data).then(value => setPosts([...value]))},[])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export {Posts};