import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post";
import {postActions} from "../../redux/slices/postSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts , loading} = useSelector(state => state.posts);

    useEffect(()=> {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {loading && <div>LOADING...</div>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};