import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Aboutme.css'; 

const aboutMeData = {
  "title": "About Me",
  "sections": [
    {
      "description": "I am a dedicated and curious individual with a passion for exploring the frontiers of technology, particularly in the realm of artificial intelligence. I have completed my studies in Computer Engineering at Instituto Tecnológico de Buenos Aires (ITBA), where I immersed myself in the fascinating world of AI, delving into topics such as Systems of Artificial Intelligence, Machine Learning, and Natural Language Processing."
    },
    {
      "description": "My educational journey includes a high school specialization in avionics, which equipped me with extensive knowledge in electronics, complementing my pursuit of technological innovation. This background has enhanced my participation in various projects, where I apply my skills to tackle complex challenges."
    },
    {
      "description": "I thrive in environments that encourage creativity and critical thinking, constantly seeking opportunities to expand my skill set. Whether it's experimenting with new libraries or diving into different database systems, I embrace challenges that push the boundaries of my knowledge."
    },
    {
      "description": "Beyond academics, I enjoy exploring emerging technologies. I am driven by a continuous quest for knowledge and collaboration, excited about the endless possibilities that the evolving tech landscape offers."
    }
  ]
};

const AboutMe = () => {
  return (
    <div className="aboutme" style={{ marginTop: '2%' }}>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          <Col md={12} className="bio-section">
            <div>
              <h1 className="aboutme-title">{aboutMeData.title}</h1>
              {aboutMeData.sections.map((section, index) => (
                <div key={index} className="aboutme-section">
                  <p className="description">{section.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
