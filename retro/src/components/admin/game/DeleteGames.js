import GameDelete from './GameDelete';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const DeleteGames = () =>{
    const [ games, setGames ] = useState( 
        [ { id: "001", name: "Loading", image: "loading.gif" } ] 
    ); 
        
    useEffect( () => { 
        const url = "https://localhost:5001/gamesadmin";
        console.log(url);
        axios.get( url )
            .then( response => { 
                setGames( response.data );
             } )
    }, [] )

    const getGames = () => {
        return games.map( ( game, i ) => { 
            return <GameDelete 
                    key={ i }
                    id={ game.id }
                    image={ game.image }
                    name={ game.name }>                        
                   </GameDelete>
        } );
    }

    return (
        <section>
            <Row>
                <h1>Delete game</h1> <br/>
            </Row>
            <Row>
                { getGames() }
            </Row>
        </section>
    )
}

export default DeleteGames;