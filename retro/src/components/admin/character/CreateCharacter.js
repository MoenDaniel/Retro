import axios from 'axios';
import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';

const CreateCharacter = () => {
    {/*Hooks, placeholder verdier for oppgavens skyld. Fjernes i en endelig løsning*/}
    const [ name, setName ] = useState("Lara Croft");
    const [ year, setYear ] = useState(1996);
    const [ description, setDescription ] = useState("Lara Croft is a fictional character and the main protagonist of the video game franchise Tomb Raider. She is presented as a highly intelligent and athletic English archaeologist who ventures into ancient tombs and hazardous ruins around the world.");
    const [ file, setFile ] = useState({});

    {/*Switch case for å systematisk poste verdiene til nye karakterer*/}
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
            case "description":
                setDescription( e.target.value );
                break;
            default:  
        }
    }
    
    {/*Post-kall for karakterer*/}
    const CreateCharacter = () => {
        const url = "https://localhost:5001/charactersadmin";
        const newCharacter = { image: file.name, name: name, year: year, description: description };

        let data = new FormData();
        data.append( "file", file );

        axios.post( url, newCharacter )
            .then(res => {console.log(res);
            
            {/*Post-kall for karakterbilde etter som bildeopplasting har egen kontroller*/}
            axios({
                method: "POST",
                url: "https://localhost:5001/ImageUpload/UploadImage",
                data: data,
                config: { headers: { "Content-Type": "multipart/form-data" } }
            })

            window.location.reload(false);

            })
    }

    {/*Retunerer formen i rader. Det er ikke nødvendig å returnere i rader, men hvis det skulle være behov 
    for kolonner i fremtiden for å posisjonere to felt ved siden av hverandre. Eller f.eks label og undertekst 
    som kan si "(*) Obligatorisk" eller noe ved siden av en label i en annen font/rødfarge*/}
    return (
        <section class="upload-section" id="upload-character">
                <Row>
                    <h2>Upload character</h2>
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
                    onClick={ CreateCharacter }
                    variant="dark">
                    Upload
                </Button>
            </Row>
        </section>
    )
}

export default CreateCharacter;