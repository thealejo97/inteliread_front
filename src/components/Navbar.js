import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top me-2" />
            Inteliread
            </Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                    Opciones
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </ul>
            </div>
        </div>
        </nav>

  );
};

export default Navbar;
