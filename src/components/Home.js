import React from "react";

const Home = ({ handleLogout }) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You are now logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
