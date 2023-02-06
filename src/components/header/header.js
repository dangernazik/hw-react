import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);

    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {selectedUser && <h1>{selectedUser.name}</h1>}
            {selectedPost && <h1>{selectedPost.title}</h1>}
        </div>
    );
};

export {Header};