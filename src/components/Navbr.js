import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbr(props) {
  const navigate = useNavigate();
  const [User, setUser] = useState();
  let token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      let user = JSON.parse(localStorage.user);
      let un = user ? user.name : null;
      setUser(un);
    }

  }, [])
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    axios.post('http://localhost:8000/api/auth/logout', {}, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    navigate('/')
  }
  return (
    <div class="nv bg-transparent">
      <div class="text-bold fixed-top bg-transparent  ">
        <Navbar bg="" variant="dark" expand="lg" class=""  >
          <span class="container bg-transparent">
            <Navbar.Brand href="/">ARCADE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div class="bg-transparent">
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                <Nav className="ml-auto bg-transparent" >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#Games">Our Games</Nav.Link>
                  <Nav.Link href="#about">Contact</Nav.Link>
                  {token ? <NavDropdown title={User} id="basic-nav-dropdown" class="bg-transparent">
                    <NavDropdown.Item href="/favorite">profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
                  </NavDropdown> :
                    <NavDropdown title="Login/Register" id="basic-nav-dropdown" class="bg-transparent">
                      <NavDropdown.Item href="/login">login</NavDropdown.Item>
                      <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    </NavDropdown>

                  }

                </Nav>
              </Navbar.Collapse>
            </div>

          </span>
        </Navbar>
      </div>
    </div>
  );
}

export default Navbr; 