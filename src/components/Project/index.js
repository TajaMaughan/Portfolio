import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { GoMarkGithub } from "react-icons/go";
import "./style.css";

function Project(props) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="mt-5 card">
        <Card.Img variant="top" src={props.img} />
        <Card.ImgOverlay className="text-right">
          <Card.Title>
            <Card.Link
              href={props.repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
              className="github pb-1 pl-1 pr-1"
            >
              <GoMarkGithub />
            </Card.Link>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Card className="title">
        <Card.Title className="text-center align-items-end">
          <Card.Link
            href={props.siteURL}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {props.name}
          </Card.Link>
        </Card.Title>
      </Card>
    </Col>
  );
}

export default Project;
