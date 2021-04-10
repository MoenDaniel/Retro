import React from 'react';
import Container from 'react-bootstrap/Container';
import GameList from '../components/games/GameList';
import { GameProvider } from '../contexts/GameContext'; 
import './style/Games.css';

export const Games = () => {
    return (
        <Container id="games-container">
            <GameProvider>
                <GameList></GameList>
            </GameProvider>
        </Container>
    )
}

export default Games;