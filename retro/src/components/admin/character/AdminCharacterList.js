import React from 'react';
import { InputGroup, FormControl, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';

import { CharacterContext } from '../../../contexts/CharacterContext';
import { AdminCharacterItem } from './AdminCharacterItem';

const AdminCharacterList = () => {
    {/*Context for å innhente verdiene av character collectionen*/}
    const { characters } = useContext( CharacterContext );
    const [ charactersState, setCcharacters ] = characters;

    {/*Søkefelt*/}
    const [ searching, setSearching ] = useState("");
    const [ searchValue, setSearchValue ] = useState ("");

    {/*Søkefelt søker når bruker taster inn en verdi*/}
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearching(true);

        {/*Søket aktiveres ikke før bruker taster inn noe*/}
        if(searchValue.length == 0) {
            setSearching(false);
        }
    }

    {/*Karakterer genereres gjennom context fra databasen og if searchvalue inneholder søkeverdien så skrives karakteren ut*/}
    const generateCharacters = () => {
        return charactersState.map( ( character, i ) => {

            if(searching) {
                if (character.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return <AdminCharacterItem key={i} { ...character }></AdminCharacterItem>
                }
            } else {
                return <AdminCharacterItem key={i} { ...character }></AdminCharacterItem>
            }
        
        })
    }

    return (
        <section>
            <h1>Character library</h1>

            {/*Søkefelt*/}
            <Row>
                <InputGroup>
                    <FormControl
                        type='search'
                        placeholder="🔍 Search"
                        onChange={ handleChange }
                    />
                </InputGroup>
            </Row>

            {/*Karakterer*/}
            <Row>
                { generateCharacters() }
            </Row>
        </section>
    )
}

export default AdminCharacterList;