import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // agrega este import

import axios from "axios";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/api/login",
        user
      );
      setMessage(response.data.message);
      setLoggedIn(true);
      console.log("Login exitoso")
      console.log(loggedIn);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  if (loggedIn) {
    return (
      <Navigate to="/404/" replace={true} />
    )
  }
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3 text-center">
                  <img className="img-fluid" src="../images/logo.png" alt="Logo" style={{ maxHeight: 50 }} />
                  <h3 className="card-title text-center mb-4">Inteliread</h3>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    username address
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                {message && <p className="text-danger">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WrappedApp() { // agrega el componente Router
  return (
    <Router>
      <App />
    </Router>
  )
}
