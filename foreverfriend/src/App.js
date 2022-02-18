import React from 'react'
import './App.css';
import 'bootstrap'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import {Route, Link, Routes, Navigate} from "react-router-dom"
import DogAdoption from './DogAdoption/DogAdoption'
import Dog from './Dog/Dog'
import CatAdoption from './CatAdoption/CatAdoption'
import Cat from './Cat/Cat'
import Home from './Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faDog, faCat } from '@fortawesome/free-solid-svg-icons'




function App() {


  return (
    <div className="appDiv">
      
      <div className="navDiv">
        <nav>
          <FontAwesomeIcon 
            icon={faHouseChimney}
            className="homeIcon"/>
          <Link 
            to="/"
            className="homeLink">Home</Link>
          <FontAwesomeIcon 
            icon={faDog}
            className="dogIcon">
            <Link to="/dogadoption"></Link>
            </FontAwesomeIcon>
          <Link 
            to="/dogadoption"
            className="dogsLink">Dogs</Link> 
          <FontAwesomeIcon 
            icon={faCat}
            className="catIcon"/>
          <Link 
            to="/catadoption"
            className="catsLink">Cats</Link>
        </nav>
      </div>
  
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogadoption" element={<DogAdoption />} />
          <Route path="/dog/:dogName" element={<Dog />} />
          <Route path="/catadoption" element={<CatAdoption />} />
          <Route path="/cat/:catName" element={<Cat />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
