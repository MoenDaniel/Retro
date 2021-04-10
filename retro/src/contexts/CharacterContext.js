import React from 'react';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

// lager og eksporterer context og provider. 
// Context brukes for å dele verdier mellom komponenter,
// uten å sende de ned fra parent til child-komponenter. 
export const CharacterContext = createContext();

export const CharacterProvider = ( props ) => {
    
    const [ character, setCharacter ] = useState ( { id:"", image: "loading.gif", name: "", year: "", Description: "" } );

    const [ characters, setCharacters ] = useState([
        { id:"", image: "loading.gif", name: "", year: "", Description: "" },
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/characters";

        axios.get( url )
            .then( response => {
                setCharacters( response.data );
            } )

    }, [])

    return (
        //returnerer provider som brukes til å dele props-values til andre komponenter
        <CharacterContext.Provider value={ { characters: [ characters, setCharacters], character: [ character, setCharacter ] } }>
            { props.children }
        </CharacterContext.Provider>
    )
}