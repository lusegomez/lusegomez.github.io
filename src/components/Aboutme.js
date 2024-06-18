import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Aboutme.css'; 


const Aboutme = () => {
  return (
    <div className="aboutme" style={{ marginTop: '5%' }}>
      <Container className=' d-flex justify-content-center align-items-center'>
        <Row>
          <Col md={12} className="bio-section">
            <div>
                <h1 className="aboutme-title">About me</h1>
                <p className="description">
                    I am a dedicated and curious individual with a passion for exploring the frontiers of technology, particularly in the realm of artificial intelligence. Currently pursuing my studies in Computer Engineering at Instituto Tecnológico de Buenos Aires (ITBA), I have immersed myself in the fascinating world of AI, delving into topics such as Systems of Artificial Intelligence, Machine Learning, and Natural Language Processing.
                </p>
                <p className="description">
                    My educational journey includes a high school specialization in avionics, which has equipped me with extensive knowledge in electronics, complementing my pursuit of technological innovation. This background enhances my participation in various projects, where I apply my skills to tackle complex challenges.
                </p>
                <p className="description">
                    I thrive in environments that encourage creativity and critical thinking, constantly seeking opportunities to expand my skill set. Whether it's experimenting with new libraries or diving into different database systems, I embrace challenges that push the boundaries of my knowledge.
                </p>
                <p className="description">
                    Outside of academia, I enjoy exploring emerging technologies and engaging in outdoor activities. I am driven by a continuous quest for knowledge and collaboration, excited about the endless possibilities that the evolving tech landscape offers.
                </p>


            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutme;
