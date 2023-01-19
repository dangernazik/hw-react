import {Post} from "./Post";

const User = ({user, setPostDetails}) => {

    const {id, name} = user

    return (
        <div className="user">
            <div><p><b style={{color: '#bf0b41'}}>ID:</b> {id}</p>
                <p><b style={{color: '#bf0b41'}}>NAME:</b> {name}</p>
            </div>
            {/*не получилось  через кнопку зєднати ці всі файли щоб виводило 10 постів цього юзера (не розумію логіку)*/}
            <div className={'button-div'}>
                <button className={'button-info'} onClick={() => {setPostDetails(<Post/>)}}><b style={{color: '#bf0b41'}}>Post Information</b></button>

            </div>
        </div>


    );
};

export {User};