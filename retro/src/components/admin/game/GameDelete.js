import axios from 'axios';
import { Col, Card, Button } from 'react-bootstrap';

const GameDelete = ( props ) => {

    const deleteGame = () => {
        const url = "https://localhost:5001/gamesadmin";
        axios.delete(`${url}/${props.id}`);

        window.location.reload(false);
    }
    

    return (
        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 }>
            <Card id="cards">
                <Card.Body>
                    <Card.Img src={(`https://localhost:5001/images/${ props.image }`)}></Card.Img>
                    <Button
                        id="delete-btn"
                        variant="dark"
                        onClick={ deleteGame }>
                        Delete { props.name }
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default GameDelete;