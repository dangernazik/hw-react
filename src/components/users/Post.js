import React from 'react';

const Post = ({post}) => {
   const {title, body, id} = post
    return (
        <div>
            <div>
                <p><b style={{color: '#bf0b41'}}>POST TITLE:</b> {title}</p>
                <p><b style={{color: '#bf0b41'}}>POST BODY:</b> {body}</p>
                <p><b style={{color: '#bf0b41'}}>POST ID:</b> {id}</p>
            </div>
        </div>
    );
};

export {Post};
