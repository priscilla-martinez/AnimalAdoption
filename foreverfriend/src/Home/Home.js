import {useState, useEffect} from 'react'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    const [randomDogImage, setRandomDogImage] = useState({})

    useEffect(() => {
        const randomDogImage = 'https://dog.ceo/api/breeds/image/random'; 

        fetch(randomDogImage)
          .then((res) => res.json())
          .then((data) => setRandomDogImage(data.message))
          .catch(() => console.log("oops error"));
    }, []);

    return(
        <div className="homePage">
            <header className="Header">
                <h1 className="Logo">Forever Friends</h1>
            </header>

            <div className="whoWeAre">
                <h2 className="whoWeAreTitle">Who We Are</h2>
                <p className="whoWeAreDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis iaculis metus, ut maximus felis tincidunt quis. Morbi congue purus nec metus gravida pulvinar. Donec quis rhoncus metus.</p>
            </div>
            
            <div className="petOfTheWeek">
                <h2 className="petOfTheWeekTitle">Pet of the Week</h2>
                <div className="powContainer">
                    <img 
                        className="petOfTheWeekImage"
                        src={randomDogImage} 
                        alt="Pet of the Week image"/>
                    <p class="img_description">Reggie</p>
                </div>
            </div>
        </div>
    )
}


export default Home