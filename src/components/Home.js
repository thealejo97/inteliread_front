import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const Home = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>You are now logged in!</p>
        
      </div>
    </>
  );
};

export default Home;