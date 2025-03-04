import React from 'react';
import { Card, Button, Container} from 'react-bootstrap';

import '../styles/EducationCard.css'

const EducationButton = ({header, eventKey}) => {
    console.log(header)
     return (
        <Button 
        style={{backgroundColor: "green"}}
        type='button'>
            {header}
        </Button>
     );
}
const EducationCard = ({section, index, onButtonClick}) => {
   return (
    <Card className="education-card text-center">
        <Card.Header className='education-card-title'>{section.heading}</Card.Header>
        <Card.Body>
            {section.content.map((content) => (
                <Container>
                    <Button className="education-button" onClick={() => onButtonClick(index, content.description)}>{content.title}</Button>
                </Container>
            ))}
        </Card.Body>
    </Card>

   )
            
}

export default EducationCard;
