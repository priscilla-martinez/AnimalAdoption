import CatData from '../CatData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';

// C A T   A P I  ----------------------------------------
function CatAdoption() {
    const urlCatBase = "https://api.thecatapi.com/v1/images/search?breed_ids="
    const catBreedCode = "abys"

    const [catImage, setCatImage] = useState([])

    function RandomCat() { 
        fetch(`${urlCatBase}${catBreedCode}`)
        .then((response) => response.json())
        .then((data) => setCatImage(data[0].url))
        .catch(() => console.log("oops error"));
    }

    return (
        <>
            <h1>Cat Adoption Page</h1>
            <h4>Cat Data Test: {CatData[0].name}</h4>
            <button type="button" className="btn btn-info" onClick={RandomCat}>Cat API Test</button>
            <img src={catImage} width="500" />
        </>
    )

}

export default CatAdoption

