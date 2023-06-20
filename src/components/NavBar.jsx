import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Blog-Cocina</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Arministrador</Nav.Link>
            <Nav.Link href="#pricing">LogIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;