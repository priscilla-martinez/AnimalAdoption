// https://dog.ceo/dog-api/
import DogData from '../DogData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function DogAdoption() {

    const [dogImages, setDogImages] = useState({})

    useEffect(()=>{ 
        const dogsUrl = 'https://dog.ceo/api/breeds/image/random/10'

        fetch(dogsUrl)
          .then((response) => response.json())
          .then((data) => setDogImages(data.message))
          .catch(() => console.log("oops error"));
      }, []);

      console.log("dogImages: ",dogImages)

    let availableDogs = DogData.map((dog,index) => {

        return(
            <div className="dogAdoptionCard" key={index}>
                <img src={dogImages[index]} className="card-img-top" alt={dog.breeds.primary} />
                <div className="card-body">
                    <h4 className="card-title">{dog.name}</h4>
                    <h5 className="dogBullets">{dog.gender}  •  {dog.age}  •  {dog.contact.address.city},{dog.contact.address.state}</h5>
                    <p className="card-text">{dog.description}</p>
                    <button type="button" className="btn btn-warning">
                        <Link to={'/dog/' + dog.name} className="viewProfileLink">View profile</Link>
                    </button>
                </div>
            </div>
        )
    })

    return(
        <div className="dogAdoptionPage">
            <header className="dogAdoptionPageHeader">
                <h1 className="dogAdoptionPageTitle">Dog Adoption Page</h1>
            </header>

            {availableDogs}
        </div>
    )

}

export default DogAdoption

