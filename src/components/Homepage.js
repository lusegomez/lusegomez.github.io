import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Homepage.css'; 

import profilePicture from '../assets/images/profile.jpeg';

const HomePage = () => {

    const handleDownloadCV = () => {
        const cvUrl = process.env.PUBLIC_URL + '../assets/files/Curriculum vitae - Lucas Gomez - Python';
        window.open(cvUrl, '_blank');
      };
  return (
    <div className="home-page d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={2} className="d-flex justify-content-center">
            <div className="profile-image">
              <img src={profilePicture} alt="Profile picture" />
            </div>
          </Col>
          <Col md={10} className="bio-section">
            <div className='info-wrapper'>
                <h1 className="name">Lucas Gomez</h1>
                <p className="position">Software Development Engineer</p>
                <p className="description">I'm a Software Development Engineer with a deep passion for Artificial Intelligence. Currently in my final year studying Computer Engineering at Instituto Tecnológico de Buenos Aires (ITBA), I specialize in Python and have hands-on experience developing AI models to solve problems.</p>
                <button type="button" class="btn btn-outline-primary" className="download-resume" onClick={handleDownloadCV}>Download Resume</button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
