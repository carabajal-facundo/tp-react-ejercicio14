import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/Index'>Blog-Cocina</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink end to={'/'} className='nav-item nav-link'>Inicio</NavLink>
            <NavLink end to={'/administrador'} className='nav-item nav-link'>Arministrador</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;