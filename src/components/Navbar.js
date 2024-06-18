import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import '../styles/Navbar.css';
import '../styles/colors.css';

const MyNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href='#home' className="navbar-brand">Lucas Gomez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto navbar-nav"> 
          <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
          <Nav.Link href="#link" className='nav-item'>About me</Nav.Link>
          <Nav.Link href="#projects" className='nav-item'>Projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/lucas-gomez-00" target="_blank" className="linkedin-btn">
            <FaLinkedin size={30} />
          </Nav.Link>
          <Nav.Link href="https://github.com/lusegomez" target="_blank" className="github-btn">
            <FaGithub size={30} />
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
