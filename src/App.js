import './App.css';
import {SimpsonComponent} from "./SimpsonComponents/SimpsonComponent";
import {RickAndMorty} from "./RickAndMortyComponents/rickAndMorty";

function App() {
   let rickAndMortyArr = [
       {
           "id": 63,
           "name": "Centaur",
           "status": "Alive",
           "species": "Mythological Creature",
           "gender": "Male",
           "image": "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
       },
       {
           "id": 129,
           "name": "Fulgora",
           "status": "Alive",
           "species": "Human",
           "gender": "Female",
           "image": "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
       },
       {
           "id": 139,
           "name": "General Store Owner",
           "status": "Dead",
           "species": "Alien",
           "gender": "Male",
           "image": "https://rickandmortyapi.com/api/character/avatar/139.jpeg",
       },
       {
           "id": 622,
           "name": "Sarge",
           "status": "Alive",
           "species": "Human",
           "gender": "Male",
           "image": "https://rickandmortyapi.com/api/character/avatar/622.jpeg",
       },
       {
           "id": 646,
           "name": "Steve",
           "status": "Dead",
           "species": "Alien",
           "gender": "Male",
           "image": "https://rickandmortyapi.com/api/character/avatar/646.jpeg",
       },
       {
           "id": 676,
           "name": "Japheth's Middle Son",
           "status": "Dead",
           "species": "Humanoid",
           "gender": "Male",
           "image": "https://rickandmortyapi.com/api/character/avatar/676.jpeg",
       }
   ]

    return (
        <div className="App">
            <h1 style={{color: "yellow"}}>Simpson family</h1>
            <div className={'wrapSimp'}>
                <SimpsonComponent name="Homer" url= "https://static.displate.com/280x392/displate/2020-06-07/58344d43f0ed84bff996cb6687c1ab62_1b5eba958a1afcdd5f5ed2ab4acc1f4b.jpg"/>
                <SimpsonComponent name="Marge" url = "https://media.vogue.co.uk/photos/5d546fcfc6ae3400088a6655/master/pass/original"/>
                <SimpsonComponent name="Bart" url = "https://i.pinimg.com/736x/7d/31/e6/7d31e650b625205dfb71567561b76fd0.jpg"/>
                <SimpsonComponent name="Lisa" url = "https://www.giantbomb.com/a/uploads/scale_medium/0/1099/235717-lisasimpson.jpg"/>
                <SimpsonComponent name="Meggie" url = "https://cdn.costumewall.com/wp-content/uploads/2015/09/maggie-simpson.jpg"/>
            </div>


            <h1 style={{color: "white"}}>Rick and Morty</h1>
            <div className={'wrapAllRick'}>
                <div className={'wrapRick'}>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[0].name} id = {rickAndMortyArr[0].id} image = {rickAndMortyArr[0].image} species = {rickAndMortyArr[0].species} status = {rickAndMortyArr[0].status} gender = {rickAndMortyArr[0].gender}/>
                    </div>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[1].name} id = {rickAndMortyArr[1].id} image = {rickAndMortyArr[1].image} species = {rickAndMortyArr[1].species} status = {rickAndMortyArr[1].status} gender = {rickAndMortyArr[1].gender}/>
                    </div>
                </div>

                <div className={'wrapRick'}>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[2].name} id = {rickAndMortyArr[2].id} image = {rickAndMortyArr[2].image} species = {rickAndMortyArr[2].species} status = {rickAndMortyArr[2].status} gender = {rickAndMortyArr[2].gender}/>
                    </div>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[3].name} id = {rickAndMortyArr[3].id} image = {rickAndMortyArr[3].image} species = {rickAndMortyArr[3].species} status = {rickAndMortyArr[3].status} gender = {rickAndMortyArr[3].gender}/>
                    </div>
                </div>

                <div className={'wrapRick'}>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[4].name} id = {rickAndMortyArr[4].id} image = {rickAndMortyArr[4].image} species = {rickAndMortyArr[4].species} status = {rickAndMortyArr[4].status} gender = {rickAndMortyArr[4].gender}/>
                    </div>
                    <div className={'wrapCharacter'}>
                        <RickAndMorty name = {rickAndMortyArr[5].name} id = {rickAndMortyArr[5].id} image = {rickAndMortyArr[5].image} species = {rickAndMortyArr[5].species} status = {rickAndMortyArr[5].status} gender = {rickAndMortyArr[5].gender}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
