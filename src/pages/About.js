import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container>
      <h1 className="page-header text-center">About Me</h1>
      <div className="text-container">
      <h5 className="text">
        I am a web developer with background as a pharmacy technician. Through
        this experience, I spent a lot of time helping customers and finding
        ways to improve the pharmacy workflow and inventory management. I really
        enjoyed my job, but it didn’t challenge me, or provide a way for me to
        move up in my field. I wanted something that would keep me learning and
        improving and I knew that programming would help me find a job that
        could provide these things. I went through the University of Utah Coding
        Bootcamp where I became proficient in building websites utilizing both
        front and back end technologies, including Javascript, React, and Mongo.
        With my ability to solve problems, see projects through, and the skills
        developed through the Bootcamp, I am very well equipped to fill a
        position in a tech driven work environment.
      </h5>
      <h3 className="text">Languages and Frameworks</h3>
      <h5 className="text">Javascript, MongoDB, MySql, React, jQuery, Express, Node, HTML, CSS</h5>
    </div>
    </Container>
  );
}

export default About;
