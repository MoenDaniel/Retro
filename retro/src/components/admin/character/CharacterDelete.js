import axios from 'axios';
import { Col, Card, Button } from 'react-bootstrap';

const CharacterDelete = ( props ) => {

    {/*const med axios kall. sletter fra databasen via crud, basert på id-string.*/}
    const deleteCharacter = () => {
        const url = "https://localhost:5001/charactersadmin";
        axios.delete(`${url}/${props.id}`);

        {/*Refresher komponenten når funksjonen kjøres*/}
        window.location.reload(false);
    }

    {/*Skriver ut karakterer med en knapp som utfører axios.delete kallet*/}
    return (
        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 }>
            <Card id="cards">
                <Card.Body>
                    <Card.Img src={(`https://localhost:5001/images/${ props.image }`)}></Card.Img>
                    <Button
                        id="delete-btn"
                        variant="dark"
                        onClick={ deleteCharacter }>
                        Delete { props.name }
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CharacterDelete;