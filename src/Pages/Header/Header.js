import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Brand href="#home">About Me</Navbar.Brand>
    <Navbar.Brand href="#home">My projects</Navbar.Brand>
    <Navbar.Brand href="#home">Contact Me</Navbar.Brand>
    
    
  </Container>
</Navbar>
        </div>
    );
};

export default Header;