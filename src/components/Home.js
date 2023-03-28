import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import SearchBook from "./SearchBook";
import CarruselBooks from "./CarruselBooks";


const Home = ({ handleLogout }) => {


  return (
    <>
      <Navbar />
      <CarruselBooks />
      <div className="row mx-0 text-center">
        <div className="col-12 mb-4">
          <h1>¡Lectura organizada, mente enfocada!</h1>
        </div>
        <div className="col-lg-6 col-12 text-center">
          <h4>Mis Libros</h4>
          <ul>
            <li>Libro 1 </li>
            <li>Libro 2 </li>
            <li>Libro 3 </li>
            <li>Libro 4 </li>
            <li>Libro 5 </li>
          </ul>
        </div>
        <div className="col-lg-6 col-12 text-center">
          <SearchBook />
        </div>
        
      </div>
    </>
  );
};

export default Home;