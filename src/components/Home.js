import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import ListBooks from "./ListBooks";

const Home = ({ handleLogout }) => {


  return (
    <>
      <Navbar />
      <ListBooks />
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>You are now logged in!</p>
        
      </div>
    </>
  );
};

export default Home;