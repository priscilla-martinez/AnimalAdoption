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


function App() {


  return (
    <div>
      <h1>Forever Friend</h1>
      <Link to="/">Home</Link>
      <Link to="/dogadoption">Dog Adoption</Link> 
      <Link to="/catadoption">Cat Adoption</Link>
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
