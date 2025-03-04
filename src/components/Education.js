import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Education.css'; 
import EducationCard from './EducationCard';

import educationInfo from '../strings/educationInfo'

const Education = () => {
    const [content, setContent] = useState([""]);
    const [indexCard, setIndexCard] = useState(0);

    const handleButtonClick = (index, text) => {
        setContent(text);
        setIndexCard(index);
    }

  return (
    <div className="education" style={{ marginTop: '2%', height: '100%'}}>
      <Container className='justify-content-center align-items-center'>
        <Row style={{marginBottom: "20px", width: "100%"}}>
            <Col md={12} className='bio-section'>
                <h1 className="education-title">Education</h1>
                <p className="description">
                    {educationInfo.itba.description.intro}
                </p>
                
            </Col>
        </Row>
        {educationInfo.itba.description.sections.map((section, index) => (
            <Row>
                <Col>
                    <EducationCard section={section} index={index} onButtonClick={handleButtonClick}></EducationCard>
                    
                </Col>
                <Col className="d-flex align-items-center justify-content-center" >
                    {
                        indexCard === index ? (
                            content.length === 1 ? (
                            <p className='description'>{content[0]}</p>
                            ) : (
                            <ul className='description'>
                                {content.map((line, idx) => (
                                <li key={idx} style={{ margin: "5px" }}>
                                    {line}
                                </li>
                                ))}
                            </ul>
                            )
                        ) : (
                            ""
                        )
                    }
                </Col>
            </Row>
        ))}
      </Container>
    </div>
  );
}

export default Education;
