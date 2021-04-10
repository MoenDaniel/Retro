import React from 'react';
import Container from 'react-bootstrap/Container';
import CharacterList from '../components/character/CharacterList';
import { CharacterProvider } from '../contexts/CharacterContext'; 
import './style/Characters.css';

export const Characters = () => {
    return (
        <Container id="characters-container">
            <CharacterProvider>
                <CharacterList></CharacterList>
            </CharacterProvider>
        </Container>
    )
}

export default Characters;