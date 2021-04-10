import React from 'react';
import { GameContext } from '../../../contexts/GameContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

export const AdminGameItem = ( { image, name, year, category, price, description, id } ) => {
    
    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({image: image, name: name, year: year, category: category, price: price, description: description, id: id});
    }
    
    return (
            <Col xs={ 12 } sm= { 12 } md={ 12 } lg={ 4 } xl={ 4 }>
                <Card id="cards">
                    <Card.Body>
                    <Card.Img src={(`https://localhost:5001/images/${ image }`)}></Card.Img>
                        <Card.Title><h2>{ name }</h2></Card.Title>
                        <Card.Text><p>Published: { year }</p></Card.Text>
                        <Card.Text><p>Category: { category }</p></Card.Text>
                        <Card.Text><p>{ description }</p></Card.Text>
                        <Button 
                            onClick={ setSelectedGame }
                            variant="dark">
                            Edit { name }
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
    )
} 