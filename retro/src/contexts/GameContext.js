import React from 'react';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

// samme som character-context. 
export const GameContext = createContext();

export const GameProvider = ( props ) => {
    
    const [ game, setGame ] = useState ( { id:"", image: "loading.gif", name: "", year: "", category: "", price: "", Description: "" } );

    const [ games, setGames ] = useState([
        { id:"", image: "loading.gif", name: "", year: "", category: "", price: "", Description: "" },
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/games";

        axios.get( url )
            .then( response => {
                setGames( response.data );
            } )

    }, [])

    return (
        <GameContext.Provider value={ { games: [ games, setGames], game: [ game, setGame ] } }>
            { props.children }
        </GameContext.Provider>
    )
}