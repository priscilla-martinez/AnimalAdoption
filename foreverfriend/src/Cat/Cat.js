import { useParams } from 'react-router'
import {useState, useEffect} from 'react'
import CatData from '../CatData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBabyCarriage, faCakeCandles, faVenusMars, faRuler, faSyringe, faCat, faDog, faHouse, faBandAid, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'


function Cat(){

    let catName = useParams().catName

    const [catImage, setCatImage] = useState("")

    const paramCatData = CatData.filter(CatData => CatData.name === catName);

    useEffect(()=>{ 
        const urlCatBase = "https://api.thecatapi.com/v1/images/search?breed_ids="
        const catBreedCode = paramCatData[0].breeds.urlID

        const fullCatUrl = `${urlCatBase}${catBreedCode}`

        fetch(fullCatUrl)
            .then((response) => response.json())
            .then((data) => setCatImage(data[0].url))
            .catch(() => console.log("oops error"));

    }, []); 

    return(
        <div className="individualDogPage">
            
            <img src={catImage} className="dogImage"/>
            <h3 className="dogName">{paramCatData[0].name}</h3>

            <div className="dogBio">

                <h4 className="bioDescription breedTitle">BREED</h4>
                <FontAwesomeIcon icon={faPaw} className="breedIcon"/>
                <p className="breed">{paramCatData[0].breeds.primary}</p>

                <h3 className="bioDescription pcTitle">PHYSICAL CHARACTERISTICS</h3>
                <FontAwesomeIcon icon={faRuler} className="sizeIcon"/>
                <p>{paramCatData[0].size}</p>
                <FontAwesomeIcon icon={faVenusMars} className="genderIcon"/>
                <p>{paramCatData[0].gender}</p>
                <FontAwesomeIcon icon={faCakeCandles} className="ageIcon"/>
                <p>{paramCatData[0].age}</p>

                <h3 className="bioDescription healthTitle">HEALTH</h3>
                <FontAwesomeIcon icon={faBandAid} className="snIcon"/>
                <p className="spayNeut">Spayed/Neutered: {paramCatData[0].attributes.spayed_neutered} </p>
                <FontAwesomeIcon icon={faSyringe} className="scIcon"/>
                <p className="shots">Shots Current: {paramCatData[0].attributes.shots_current} </p>
                <FontAwesomeIcon icon={faHandHoldingHeart} className="spcIcon"/>
                <p className="spCare">Special Care: {paramCatData[0].attributes.special_needs}</p>

                <h3 className="bioDescription behaviorTitle">BEHAVIORAL CHARACTERISTICS</h3>
                <FontAwesomeIcon icon={faHouse} className="htIcon"/>
                <p className="houseTrained">House-Trained: {paramCatData[0].attributes.house_trained}</p>
                <FontAwesomeIcon icon={faBabyCarriage} className="gkIcon"/>
                <p className="gKids">Good with kids: {paramCatData[0].environment.children}</p>
                <FontAwesomeIcon icon={faDog} className="gdIcon"/>
                <p className="gDogs">Good with other dogs: {paramCatData[0].environment.dogs}</p>
                <FontAwesomeIcon icon={faCat} className="gcIcon"/>
                <p className="gCats">Good with cats: {paramCatData[0].environment.cats}</p>
            </div>
        </div>
    )
}









/*

    const paramCatData = CatData.filter(CatData => CatData.name === catName).map(data => {
        return(
            <>
                <h1>{data.name}</h1>
                <h2>{data.breeds.primary}</h2>
                <h3>{data.description}</h3>
            </>
        );
    })

    return(
        <>
            <h1>Individual Cat Page</h1>
            {paramCatData}
        </>
    )
}
*/

export default Cat