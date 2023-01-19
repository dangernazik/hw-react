import {Post} from "./Post";

const Posts = ({posts}) => {

    return (
        <div>
                {posts.map(val => <Post key={val.id} post={val}/>)}
        </div>
    );
};

export {Posts};