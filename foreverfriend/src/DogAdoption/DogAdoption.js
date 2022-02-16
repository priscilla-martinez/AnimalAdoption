import DogData from '../DogData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';

function DogAdoption() {

    // D O G   A P I  ----------------------------------------
  const urlDog = "https://dog.ceo/api/breeds/image/random"

  const [dogImage, setDogImage] = useState({})

  function RandomDog() { 
      fetch(urlDog)
        .then((response) => response.json())
        .then((data) => setDogImage(data))
        .catch(() => console.log("oops error"));

        console.log(dogImage)
  }

    return(
        <>
            <h1>Dog Adoption Page</h1>
            <h2>Dog Data Test: {DogData[0].name}</h2>
            <button type="button" className="btn btn-primary" onClick={RandomDog}>Dog API Test</button>
            <img src={dogImage.message} />
        </>
    )

}

export default DogAdoption

