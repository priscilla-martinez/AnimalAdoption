// https://docs.thecatapi.com/example-by-breed
import CatData from '../CatData'
import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';

// C A T   A P I  ----------------------------------------
function CatAdoption() {

    let availableCats = CatData.map((cat,index) => {

        return(
            <div className="dogAdoptionCard" key={index}>
                <img src='https://cataas.com/cat' className="card-img-top" alt={cat.breeds.primary} />
                <div className="card-body">
                    <h4 className="card-title">{cat.name}</h4>
                    <h5 className="dogBullets">{cat.gender}  •  {cat.age}  •  {cat.contact.address.city},{cat.contact.address.state}</h5>
                    <p className="card-text">{cat.description}</p>
                    <button type="button" class="btn btn-info">
                        <Link to={'/cat/' + cat.name} className="viewProfileLinkCat">View profile</Link>
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div className="catAdoptionPage">
            <header className="catAdoptionPageHeader">
                <h1 className="catAdoptionPageTitle">Cat Adoption Page</h1>
            </header>
            {availableCats}
        </div>
    )

}

export default CatAdoption

