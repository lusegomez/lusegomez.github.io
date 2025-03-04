import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Homepage.css'; 

import profilePicture from '../assets/images/profile.jpg';

const HomePage = () => {
  return (
    <div className="home-page" style={{ marginTop: '10%' }}>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <div className="profile-image">
              <img src={profilePicture} alt="Profile picture"/>
            </div>
          </Col>
          <Col md={8} className="bio-section">
            <div className='info-wrapper'>
                <h1 className="name">Lucas Gomez</h1>
                <p className="position">Computer Engineer</p>
                <p className="description">Graduated with a Bachelor's Degree in Computer Engineering, with a strong foundation in various programming languages and technologies. Passionate about developing innovative solutions, with interests spanning backend development, cloud technologies, and software engineering. Excited to work on challenging projects that drive efficiency and scalability.</p>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
