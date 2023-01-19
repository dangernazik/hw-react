import React, {useState} from "react";
import {Posts} from "./Posts";
import {userService} from "../../services/userService";

const User = ({user}) => {

    const {id, name} = user
    const [postDetails, setPostDetails] = useState(null)

    const handleClick = async () => {
        const data = await userService.getAllPosts(id).then(val => val.data);
        setPostDetails([...data]);
    }

    return (
        <div className={'user-wrap'}>
            <div className="user">
                <div><p><b style={{color: '#bf0b41'}}>ID:</b> {id}</p>
                    <p><b style={{color: '#bf0b41'}}>NAME:</b> {name}</p>
                </div>
                <div className={'button-div'}>
                    <button className={'button-info'} onClick={handleClick}><b style={{color: '#bf0b41'}}>Post
                        Information</b></button>
                </div>
            </div>
            <div >
                {postDetails && <Posts posts={postDetails}/>}
            </div>
        </div>


    );
};

export {User};