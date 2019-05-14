import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container>
      <h1 className="page-header text-center">About Me</h1>
      <div className="text-container">
        <h5 className="text">
          My name is Mataja Maughan. I am a full stack web developer with a love a learning and problem solving. I enjoy
          picking up new skills and expanding on existing skills. One of my favorite things about code is the problem
          solving aspect. Just because I don't know the answer to something doesn't mean I can't fix a problem. The
          answers are out there and finding them is very fulfilling. The other aspect to coding that I love is how
          quickly things can change and staying abreast of those changes means that the job will never get boring and
          there is always a new way to solve a problem! I love learning about new techniques and methods that I can
          apply to my code to optimize my products to the best that they can be.
          <br /> <br />I have a lot of experience working in a team environment. As a result, I have developed excellent
          communication skills and the ability to collaborate with all different types of people. I’m accustomed to
          deadline driven environments and utilize those skills to make sure that we are on track, whether that’s an
          agile based company or longer developmental cycles. Feel free to reach out me to by email or on LinkedIn.
        </h5>
        <br />
        <h3 className="text">Languages and Frameworks</h3>
        <h5 className="text">Javascript, MongoDB, MySql, React, jQuery, Express, Node, HTML, CSS</h5>
      </div>
    </Container>
  );
}

export default About;
