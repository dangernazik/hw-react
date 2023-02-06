import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/postSlice";

const Post = ({post}) => {
   const {title, body, id} = post
    const dispatch = useDispatch()
    return (
            <div>
                <p><b style={{color: '#bf0b41'}}>POST ID:</b> {id}</p>
                <p><b style={{color: '#bf0b41'}}>POST TITLE:</b> {title}</p>
                <p><b style={{color: '#bf0b41'}}>POST BODY:</b> {body}</p>
                <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>click</button>
            </div>

    );
};

export {Post};
