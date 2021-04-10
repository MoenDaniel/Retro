import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';

import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { LibraryItem } from './LibraryItem';

const LibraryList = () => {

    const { games } = useContext( GameContext );
    const [ gamesState, setGames ] = games;

   

    const generateGames = () => {
        return gamesState.map( ( game, i ) => {
            return <LibraryItem key={i} { ...game }></LibraryItem>
        } )
    }

    {/*Spillbibliotek til forsiden som henter bilder fra spilldatabasen*/}
    return (
        <section id="game-library">
            <Nav.Link as={ Link } to="/games">
                <Row>
                    <h1>Explore the game library</h1>
                </Row>
                <Row>
                    { generateGames() }
                </Row>
            </Nav.Link>
        </section>
    )
}

export default LibraryList;