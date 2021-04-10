import React from 'react';
import { InputGroup, FormControl, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { GameContext } from '../../../contexts/GameContext';
import { AdminGameItem } from './AdminGameItem';

const AdminGameList = () => {
    const { games } = useContext( GameContext );
    const [ gamesState, setGames ] = games;

    const [ searching, setSearching ] = useState("");
    const [ searchValue, setSearchValue ] = useState ("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearching(true);

        if(searchValue.length == 0) {
            setSearching(false);
        }
    }

    const generateGames = () => {
        return gamesState.map( ( game, i ) => {

            if(searching) {
                if (game.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return <AdminGameItem key={i} { ...game }></AdminGameItem>
                }
            } else {
                return <AdminGameItem key={i} { ...game }></AdminGameItem>
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

export default AdminGameList;