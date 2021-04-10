import React from 'react';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

export const CharacterItem = ( { image, name, year, description } ) => {
    return (
        <Col xs={ 12 } sm= { 12 } md={ 6 } lg={ 4 } xl={ 4 }>
            <Card id="cards">
                <Card.Body>
                <Card.Img src={(`https://localhost:5001/images/${ image }`)}></Card.Img>
                    <Card.Title><h2>{ name }</h2></Card.Title>
                    <Card.Text><p>First appearance: { year }</p></Card.Text>
                    <Card.Text><p>{ description }</p></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
} 