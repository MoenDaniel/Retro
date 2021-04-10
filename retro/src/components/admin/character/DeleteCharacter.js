import CharacterDelete from './CharacterDelete';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

const DeleteCharacters = () =>{
    {/*Hooks*/}
    const [ characters, setCharacters ] = useState( 
        [ { id: "001", name: "Loading", image: "loading.gif" } ] 
    ); 
    
    {/*Hooks med axios-kall for å hente karakterer*/}
    useEffect( () => { 
        const url = "https://localhost:5001/charactersadmin";
        console.log(url);
        axios.get( url )
            .then( response => { 
                setCharacters( response.data );
             } )
    }, [] )

    
    const getCharacters = () => {
        return characters.map( ( character, i ) => { 
            return <CharacterDelete 
                        key={ i }
                        id={ character.id }
                        image={ character.image }
                        name={ character.name }>                        
                   </CharacterDelete>
        } );
    }

    return (
        <section>
            <Row>
                <h1>Delete character</h1>
            </Row>
            <Row>
                { getCharacters() }
            </Row>
        </section>
    )
}

export default DeleteCharacters;