import { GameContext } from '../../../contexts/GameContext';
import { useContext, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import axios from 'axios';

const GameUpdate = () => {
    const [ file, setFile ] = useState({});

    const { game, games } = useContext( GameContext );
    const [ gameState, setGame ] = game;
    const [ gamesState, setGames ] = games;

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "image":
                setFile( e.target.files[0] );
                break;
            default:
            }
        }

    const updateGame = () => {
        if(gameState.id){
            const url = "https://localhost:5001/gamesadmin";

            let data = new FormData();
            data.append( "file", file );

            gameState.image = file.name;

            axios.put(`${url}/${gameState.id}`, gameState)
                .then( response => {
                    let indexOfGame = gamesState.findIndex( sh0 => sh0.id = gameState.id );
                    gamesState[indexOfGame] = gameState;
                    setGames([...gamesState]);
                })

                axios({
                    method: "POST",
                    url: "https://localhost:5001/ImageUpload/UploadImage",
                    data: data,
                    config: { headers: { "Content-Type": "multipart/form-data" } }
                })
        }
    }

    return (
        <section class="update-section">
            <Row>
                <h2>Edit game</h2>
                <h3>Please choose a game from the library</h3>
            </Row>
            <Row>
                <label>Name</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setGame( { ...gameState, name: e.target.value } ) }
                    type="text" 
                    value={ gameState.name }>
                </input>
            </Row>
            <Row>
                <label>Year</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setGame( { ...gameState, year: parseInt(e.target.value) } ) }
                    type="text" 
                    value={ gameState.year }>
                </input>
            </Row>
            <Row>
                <label>Category</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setGame( { ...gameState, category: e.target.value } ) }
                    type="text" 
                    value={ gameState.category }>
                </input>
            </Row>
            <Row>
                <label>Price</label>
            </Row>
            <Row>
                <input
                    class="update-input"
                    onChange={ (e) => setGame( { ...gameState, price: parseInt(e.target.value) } ) }
                    type="text" 
                    value={ gameState.price }>
                </input>
            </Row>
            <Row>
                <label>Description</label>
            </Row>
            <Row>
                <textarea
                    rows="5"
                    class="update-input"
                    value={ gameState.description }
                    onChange={ (e) => setGame( { ...gameState, description: e.target.value } ) }
                />
            </Row>
            <Row>
                <input 
                    id="image"
                    class="update-input"
                    onChange={ handleChange } 
                    type="file"
                />
            </Row>
            <Row>
                <Button 
                    onClick={ updateGame }
                    variant="dark">
                    Update game
                </Button>
            </Row>
        </section>
    )
}

export default GameUpdate;