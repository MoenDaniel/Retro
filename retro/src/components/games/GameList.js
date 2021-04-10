import React from 'react';
import { InputGroup, FormControl, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';

import { GameContext } from '../../contexts/GameContext';
import { GameItem } from './GameItem';

const GameList = () => {

    const { games } = useContext( GameContext );
    const [ gamesState, setGames ] = games;

    const [ searching, setSearching ] = useState("");
    const [ searchValue, setSearchValue ] = useState ("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearching(true);

        if(searchValue.length == 1) {
            setSearching(false);
        }
    }

    const generateGames = () => {
        return gamesState.map( ( game, i ) => {

            if(searching) {
                if (game.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return <GameItem key={i} { ...game }></GameItem>
                }
            } else {
                return <GameItem key={i} { ...game }></GameItem>
            }
        
        })
    }

    return (
        <section>
            <h1>Game library</h1>

            <Row>
                <InputGroup>
                    <FormControl
                        type='search'
                        placeholder="🔍 Search"
                        onChange={ handleChange }
                    />
                </InputGroup>
            </Row>

            <Row>
                { generateGames() }
            </Row>
        </section>
    )
}

export default GameList;