import React from 'react';
import { Col, Card } from 'react-bootstrap';

export const LibraryItem = ( { image } ) => {
    return (
        <Col xs={ 3 } sm={ 3 } md={ 3 } lg={ 2 } xl={ 2 }>
            <Card id="library-card">
                <Card.Body>
                    <Card.Img src={(`https://localhost:5001/images/${ image }`)}></Card.Img>
                </Card.Body>
            </Card>
        </Col>
    )
} 