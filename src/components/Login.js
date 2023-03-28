import React, { useState,useEffect  } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };


  
  useEffect(() => {
    if (!showAlert) {
      setMessage("");
    }
  }, [showAlert]);


  const handleAlertClose = () => {
    setShowAlert(false);
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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
      console.log("Login exitoso")
    } catch (error) {
      setMessage(error.message);
      setShowAlert(true);
    }
  };

  if (loggedIn) {
    return (
      <Navigate to="/home/" replace={true} />
    )
  }
  
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3 text-center">
                  <img className="img-fluid" src="../images/logo.png" alt="Logo" style={{ maxHeight: 50 }} />
                  <h3 className="card-title text-center mb-4">Inteliread</h3>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    username
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
                  {showAlert && (
                    <div
                      className="alert alert-danger alert-dismissible fade show fixed-top"
                      role="alert"
                      style={{ position: "fixed" }}
                    >
                      <strong>Error:</strong> {message}.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        onClick={handleAlertClose}
                      ></button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
