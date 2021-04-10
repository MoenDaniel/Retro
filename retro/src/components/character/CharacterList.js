import React from 'react';
import { InputGroup, FormControl, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { CharacterItem } from './CharacterItem';

const CharacterList = () => {

    const { characters } = useContext( CharacterContext );
    const [ charactersState, setCharacters ] = characters;

    const [ searching, setSearching ] = useState("");
    const [ searchValue, setSearchValue ] = useState ("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearching(true);

        if(searchValue.length == 1) {
            setSearching(false);
        }
    }

    const generateCharacters = () => {
        return charactersState.map( ( character, i ) => {

            if(searching) {
                if (character.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return <CharacterItem key={i} { ...character }></CharacterItem>
                }
            } else {
                return <CharacterItem key={i} { ...character }></CharacterItem>
            }
        
        })
    }

    return (
        <section>
            <h1>Character library</h1>

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
                { generateCharacters() }
            </Row>
        </section>
    )
}

export default CharacterList;