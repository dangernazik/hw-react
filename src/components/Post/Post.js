import React, {useEffect, useState} from 'react';

import css from "../Comment/Comment.module.css";
import {postService} from "../../service";

const Post = ({postId}) => {

    const [post, setPost] = useState(null);


    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost({...data}));
    }, [postId]);

    return (
        <div className={css.Comment}>
        {
            post && <>
            <div><b>id:</b>{post.id}</div>
            <div><b>title:</b>{post.title}</div>
            <div><b>body:</b>{post.body}</div>

        </>
        }
        </div>
    );
};

export {Post};