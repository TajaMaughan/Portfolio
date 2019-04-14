import React from "react";
import Project from "../components/Project";
import projectList from "../projectList.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

function Projects() {
  return (
    <Container className="mb-5">
      <h1 className="page-header text-center">Projects</h1>
      <Row>
        {projectList.map(project => (
          <Project
            name={project.name}
            img={project.img}
            siteURL={project.siteURL}
            repositoryURL={project.repositoryURL}
            description={project.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
