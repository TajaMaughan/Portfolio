import React from "react";
import Project from "../components/Project";
import projectList from "../projectList.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
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
