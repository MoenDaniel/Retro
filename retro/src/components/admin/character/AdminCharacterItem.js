import React from 'react';
import { CharacterContext } from '../../../contexts/CharacterContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

export const AdminCharacterItem = ( { image, name, year, description, id } ) => {
    
    {/*Context*/}
    const { character } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;

    {/*Tilegner de verdier*/}
    const setSelectedCharacter = () => {
        setCharacter({image: image, name: name, year: year, description: description, id: id});
    }
    
    {/*Cards for karakterer som kan endres*/}
    return (    
        <Col xs={ 12 } sm= { 12 } md={ 12 } lg={ 4 } xl={ 4 }>
            <Card id="cards">
                <Card.Body>
                <Card.Img src={(`https://localhost:5001/images/${ image }`)}></Card.Img>
                    <Card.Title><h2>{ name }</h2></Card.Title>
                    <Card.Text><p>First apperance: { year }</p></Card.Text>
                    <Card.Text><p>{ description }</p></Card.Text>
                    <Button 
                        onClick={ setSelectedCharacter }
                        variant="dark">
                        Edit character
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
} 