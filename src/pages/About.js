import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


function About() {
  return (
    <Container>
        <Jumbotron>
            <h2>About Me</h2>
        </Jumbotron>
      <h5 class="">
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
      <h3>Languages and Frameworks</h3>
      <p>Javascript</p><p>MongoDB</p><p>MySql</p><p>React</p><p>jQuery</p><p>Express</p><p>Node</p><p>HTML</p><p>CSS</p>
    </Container>
  );
}

export default About;
