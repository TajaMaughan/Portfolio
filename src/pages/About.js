import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container>
      <h1 className="page-header text-center">About Me</h1>
      <div className="text-container">
        <h5 className="text">
          I am a full stack web developer with a love a learning and problem solving. I enjoy picking up new skills and expounding on existing skills. Just because I don't know the answer to something doesn't mean I can't fix a problem. The answers are out there and finding them is very fulfilling. <br /><br /> I have a lot of experience working in a team environment. As a result, I have developed excellent communication skills and the ability to collaborate with all different types of people.
        </h5>
        <br />
        <h3 className="text">Languages and Frameworks</h3>
        <h5 className="text">Javascript, MongoDB, MySql, React, jQuery, Express, Node, HTML, CSS</h5>
      </div>
    </Container>
  );
}

export default About;
