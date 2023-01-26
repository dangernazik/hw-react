import React from 'react';
import {Post} from "../../components/Post/Post";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const {postId} = useParams();
    return (
        <div>
       <Post postId={postId}/>
        </div>
    );
};

export {PostPage};