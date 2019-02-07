import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProjectCard = (props) => {
  return (
      <Card className="project-card">
        <CardBody>
          <CardTitle><h3>{props.title}</h3></CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
        <CardImg top className="card-image" src={props.websiteImage} alt="Card image cap" />        
        <CardBody>
          <CardText>{props.websiteDescription}</CardText>
          <CardLink href={props.link} target="blank" ><Button color={props.buttonColor}>Visit Website</Button></CardLink>
        </CardBody>
      </Card>
  );
};

export default ProjectCard;
