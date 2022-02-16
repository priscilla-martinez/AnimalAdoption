// https://docs.thecatapi.com/example-by-breed
import CatData from '../CatData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';

// C A T   A P I  ----------------------------------------
function CatAdoption() {
    const urlCatBase = "https://api.thecatapi.com/v1/images/search?breed_ids="
    const catBreedCode = CatData[0].breeds.urlID
    const fullCatUrl = `${urlCatBase}${catBreedCode}`

    const [catImage, setCatImage] = useState([])

    useEffect(()=>{
        fetch(fullCatUrl)
        .then((response) => response.json())
        .then((data) => setCatImage(data[0].url))
        .catch(() => console.log("oops error"));
    }, []);

    console.log(catImage)

    return (
        <>
            <h1>Cat Adoption Page</h1>
            <h3>{CatData[0].name}</h3>
            <h4>{CatData[0].breeds.primary}</h4>
            <button type="button" class="btn btn-light">
                <Link to={'/cat/' + CatData[0].name}>More Info</Link>
            </button>
            <img src={catImage} width="300"/>
        </>
    )

}

export default CatAdoption

