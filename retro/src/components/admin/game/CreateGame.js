import axios from 'axios';
import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';

const CreateGame = () => {
    const [ file, setFile ] = useState({});
    const [ name, setName ] = useState("Tomb Raider");
    const [ year, setYear ] = useState(1996);
    const [ category, setCategory ] = useState("Action-adventure");
    const [ price, setPrice ] = useState(40);
    const [ description, setDescription ] = useState("Tomb Raider is a 1996 action-adventure video game developed by Core Design and published by Eidos Interactive. It was first released on the Sega Saturn, followed shortly by versions for MS-DOS and the PlayStation.");

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "image":
                setFile( e.target.files[0] );
                break;
            case "name":
                setName( e.target.value );
                break;
            case "year":
                setYear( parseInt( e.target.value ) );
                break;
            case "category":
                setCategory( e.target.value );
                break;
            case "price":
                setPrice( parseInt(e.target.value ) );
                break;
            case "description":
                setDescription( e.target.value );
                break;
            default:  
        }
    }
    
    const createGame = () => {
        const url = "https://localhost:5001/gamesadmin";
        const newGame = { image: file.name, name: name, year: year, category: category, price: price, description: description };

        let data = new FormData();
        data.append( "file", file );

        axios.post( url, newGame )
            .then(res => {console.log(res);
    
        console.log(newGame);

        axios({
          method: "POST",
          url: "https://localhost:5001/ImageUpload/UploadImage", //url, controller og metoden fra controller
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } }
      })
    
      window.location.reload(false);

    })
}

    return (
        <section class="upload-section" id="upload-game">
                <Row>
                    <h2>Upload game</h2>
                </Row>
                <Row>
                    <label>Name</label>
                </Row>
                <Row>
                    <input
                        id="name"
                        class="update-input"
                        onChange={ handleChange } 
                        type="text" 
                        value={ name } 
                    />
                </Row>
                <Row>
                    <label>Year published</label>
                </Row>
                <Row>
                    <input
                        id="year"
                        class="update-input"
                        onChange={ handleChange } 
                        type="text" 
                        value={ year } 
                    />
                </Row>
                <Row>
                    <label>Category</label>
                    </Row>
                <Row>
                    <input
                        id="category"
                        class="update-input"
                        onChange={ handleChange } 
                        type="text" 
                        value={ category } 
                    />
                </Row>
                <Row>
                    <label>Price</label>
                </Row>
                <Row>
                    <input
                        id="price"
                        class="update-input"
                        onChange={ handleChange }
                        value={ price } 
                    />
                </Row>
                <Row>
                    <label>Description</label>
                </Row>
                <Row>
                    <textarea
                        id="description"
                        class="update-input"
                        rows="5"
                        onChange={ handleChange } 
                        type="textfield" 
                        value={ description }
                    />
                </Row>
                <Row>
                    <label>Image</label>
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
                    onClick={ createGame }
                    variant="dark">
                    Upload
                </Button>
            </Row>
        </section>
    )
}

export default CreateGame;