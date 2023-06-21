import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/administrador'>Blog-Cocina</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink end to={'/administrador'} className='nav-item nav-link'>Arministrador</NavLink>
            <NavLink end to={'/detalle'} className='nav-item nav-link'>Detalle</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;