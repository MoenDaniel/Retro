import { CharacterContext } from '../../../contexts/CharacterContext';
import { useContext, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import axios from 'axios';

const CharacterUpdate = () => {
    {/*Hooks*/}
    const [ file, setFile ] = useState({});

    {/*Context*/}
    const { character, characters } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;
    const [ charactersState, setCharacters ] = characters;

    {/*Switch case for å oppdatere handleChange*/}
    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "image":
                setFile( e.target.files[0] );
                break;
            default:
            }
        }

    {/*axios-kall for å oppdatere karakter og bilde*/}
    const updateCharacter = () => {
        if(characterState.id){
            const url = "https://localhost:5001/charactersadmin";

            let data = new FormData();
            data.append( "file", file );
            // setter navn for image-proppen. 
            characterState.image = file.name;
            
            axios.put(`${url}/${characterState.id}`, characterState)
                .then( response => {
                    let indexOfCharacter = charactersState.findIndex( sh0 => sh0.id = characterState.id );
                    charactersState[indexOfCharacter] = characterState;
                    setCharacters([...charactersState]);
                })
                //post for bildeopplasting
                axios({
                    method: "POST",
                    url: "https://localhost:5001/ImageUpload/UploadImage",
                    data: data,
                    config: { headers: { "Content-Type": "multipart/form-data" } }
                })
        }
    }

    return (
        // setCharacter-funksjonen setter inn ny verdi fra input-felt. Den kalles på etter updateCharacter
        // trykkes på, som aktiverer axios.put-kallet ovenfor.
        <section class="update-section">
            <Row>
                <h2>Edit character</h2>
                <h3>Please choose a character from the library</h3>
            </Row>
            <Row>
                <label>Name</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setCharacter( { ...characterState, name: e.target.value } ) }
                    type="text" 
                    value={ characterState.name }>
                </input>
            </Row>
            <Row>
                <label>Year</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setCharacter( { ...characterState, year: parseInt(e.target.value) } ) }
                    type="text" 
                    value={ characterState.year }>
                </input>
            </Row>
            <Row>
                <label>Description</label>
            </Row>
            <Row>
                <textarea
                    rows="5"
                    class="update-input"
                    value={ characterState.description }
                    onChange={ (e) => setCharacter( { ...characterState, description: e.target.value } ) }
                />
            <Row>
                <input 
                    id="image"
                    class="update-input"
                    onChange={ handleChange } 
                    type="file"
                />
                </Row>
            </Row>
            <Row>
                <Button 
                    onClick={ updateCharacter }
                    variant="dark">
                    Update character
                </Button>
            </Row>
        </section>
    )
}

export default CharacterUpdate;