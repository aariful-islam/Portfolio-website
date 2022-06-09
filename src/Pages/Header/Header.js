import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Container>
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="about">About Me</Nav.Link>
    <Nav.Link as={Link} to="/projects">My projects</Nav.Link>
    <Nav.Link as={Link} to="contact">Contact Me</Nav.Link>
    
    
  </Container>
</Navbar>
        </div>
    );
};

export default Header;