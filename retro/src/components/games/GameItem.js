import React from 'react';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

export const GameItem = ( { image, name, year, category, price, description } ) => {
    return (
        <Col xs={ 12 } sm= { 12 } md={ 6 } lg={ 4 } xl={ 4 }>
            <Card id="cards">
                <Card.Body>
                <Card.Img src={(`https://localhost:5001/images/${ image }`)}></Card.Img>
                    <Card.Title><h2>{ name }</h2></Card.Title>
                    <Card.Text><p>Published: { year }</p></Card.Text>
                    <Card.Text><p>Category: { category }</p></Card.Text>
                    <Card.Text><p>${ price }</p></Card.Text>
                    <Card.Text><p>{ description }</p></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
} 