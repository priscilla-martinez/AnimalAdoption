import { useParams } from 'react-router'
import {useState, useEffect} from 'react'
import DogData from '../DogData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBabyCarriage, faCakeCandles, faVenusMars, faRuler, faSyringe, faCat, faDog, faHouse, faBandAid, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

function Dog(){

    let dogName = useParams().dogName

    const [dogImage, setDogImage] = useState("")

    const paramDogData = DogData.filter(DogData => DogData.name === dogName);

    useEffect(()=>{ 

        const urlDogBase = "https://dog.ceo/api/breed/"
        const urlEnding = "/images/random"
        const dogUrl = paramDogData[0].breeds.urlID

        const fullUrl = `${urlDogBase}${dogUrl}${urlEnding}`

        fetch(fullUrl)
          .then((response) => response.json())
          .then((data) => setDogImage(data.message))
          .catch(() => console.log("oops error"));

    }, []); 

    return(
        <div className="individualDogPage">
            
            <img src={dogImage} className="dogImage"/>
            <h3 className="dogName">{paramDogData[0].name}</h3>

            <div className="dogBio">

                <h4 className="bioDescription breedTitle">BREED</h4>
                <FontAwesomeIcon icon={faPaw} className="breedIcon"/>
                <p className="breed">{paramDogData[0].breeds.primary}</p>

                <h3 className="bioDescription pcTitle">PHYSICAL CHARACTERISTICS</h3>
                <FontAwesomeIcon icon={faRuler} className="sizeIcon"/>
                <p>{paramDogData[0].size}</p>
                <FontAwesomeIcon icon={faVenusMars} className="genderIcon"/>
                <p>{paramDogData[0].gender}</p>
                <FontAwesomeIcon icon={faCakeCandles} className="ageIcon"/>
                <p>{paramDogData[0].age}</p>

                <h3 className="bioDescription healthTitle">HEALTH</h3>
                <FontAwesomeIcon icon={faBandAid} className="snIcon"/>
                <p className="spayNeut">Spayed/Neutered: {paramDogData[0].attributes.spayed_neutered} </p>
                <FontAwesomeIcon icon={faSyringe} className="scIcon"/>
                <p className="shots">Shots Current: {paramDogData[0].attributes.shots_current} </p>
                <FontAwesomeIcon icon={faHandHoldingHeart} className="spcIcon"/>
                <p className="spCare">Special Care: {paramDogData[0].attributes.special_needs}</p>

                <h3 className="bioDescription behaviorTitle">BEHAVIORAL CHARACTERISTICS</h3>
                <FontAwesomeIcon icon={faHouse} className="htIcon"/>
                <p className="houseTrained">House-Trained: {paramDogData[0].attributes.house_trained}</p>
                <FontAwesomeIcon icon={faBabyCarriage} className="gkIcon"/>
                <p className="gKids">Good with kids: {paramDogData[0].environment.children}</p>
                <FontAwesomeIcon icon={faDog} className="gdIcon"/>
                <p className="gDogs">Good with other dogs: {paramDogData[0].environment.dogs}</p>
                <FontAwesomeIcon icon={faCat} className="gcIcon"/>
                <p className="gCats">Good with cats: {paramDogData[0].environment.cats}</p>
            </div>
        </div>
    )
}

export default Dog