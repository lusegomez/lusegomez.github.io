import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Projects.css'; 

const Projects = () => {
  return (
    <div className="projects" style={{ marginTop: '5%' }}>
      <Container fluid className='d-flex justify-content-center align-items-center'>
        <Row className="w-100">
          <Col md={12} className="bio-section">
            <div>
                <h1 className="projects-title">Projects</h1>
                <div className="projects-container">
                    <ul className="project-categories">
                        <li className="project-category-item">
                            <button type="button" className="btn btn-primary-custom">Artificial Intelligence</button>
                        </li>
                        <li className="project-category-item">
                            <button type="button" className="btn btn-primary-custom">General</button>
                        </li>
                        <li className="project-category-item">
                            <button type="button" className="btn btn-primary-custom">Miscellaneous</button>
                        </li>
                    </ul>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
