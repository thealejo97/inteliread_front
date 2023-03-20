import { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            
    
          <Link to="/home" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top mx-3" />
            Inteliread
          </Link>
    
    
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" cc />
          <Navbar.Collapse id="basic-navbar-nav" className="mx-4 px-4">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              {/* <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">About</Nav.Link> */}
            </Nav>
            <NavDropdown title="Options" onClick={handleMenu} className="mx-3">
              <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      );
};
export default MyNavbar;
