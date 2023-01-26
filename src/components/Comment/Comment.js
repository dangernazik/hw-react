import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const {postId, id , name, email, body} = comment

    const navigate = useNavigate();
    const eventClick = () =>{
        navigate(postId.toString());}

    return (
        <div >
            <button onClick={eventClick}>
                <div><b>postId:</b>{postId}</div>
                <div><b>id:</b>{id}</div>
                <div><b>name:</b>{name}</div>
                <div><b>email:</b>{email}</div>
                <div><b>body:</b>{body}</div>
            </button>
        </div>
    );
};

export {Comment};