// https://dog.ceo/dog-api/
import DogData from '../DogData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';

function DogAdoption() {

    // D O G   A P I  ----------------------------------------
  const urlDogBase = "https://dog.ceo/api/breed/"
  const urlEnding = "/images/random"
  const dogUrl = DogData[3].breeds.urlID
  const fullUrl = `${urlDogBase}${dogUrl}${urlEnding}`

  const [dogImage, setDogImage] = useState({})

  useEffect(()=>{ 
      fetch(fullUrl)
        .then((response) => response.json())
        .then((data) => setDogImage(data.message))
        .catch(() => console.log("oops error"));

        console.log(dogImage)
    }, []);

    return(
        <>
            <h1>Dog Adoption Page</h1>
            <h2>{DogData[3].name}</h2>
            <h3>{DogData[3].breeds.primary}</h3>
            <button type="button" class="btn btn-light">
                <Link to={'/dog/' + DogData[0].name}>More Info</Link>
            </button>            
            <img src={dogImage} />
        </>
    )

}

export default DogAdoption

