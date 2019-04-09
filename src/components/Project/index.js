import React from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><a href={props.siteURL}>{props.name}</a></Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.repositoryURL}>Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
