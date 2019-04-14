import React from "react";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container>
      <h1 className="page-header text-center">Find Me</h1>
      <div className="text-container">
      <h5 className="text">Github: <a href="https://github.com/TajaMaughan" className="contact-link">https://github.com/TajaMaughan</a></h5>
      <h5 className="text">LinkedIn: <a href="https://www.linkedin.com/in/mataja-maughan-0ab80316a/" className="contact-link">https://www.linkedin.com/in/mataja-maughan-0ab80316a/</a></h5>
      <h5 className="text">Email: matajamaughan@gmail.com</h5>
      <h5 className="text">Resume: <a href="./assets/images/MatajaMResume.pdf" download className="contact-link">Download</a>/<a href="https://docs.google.com/document/d/e/2PACX-1vRlquF0GMDa3CN87QAmQUHSeoawd6yI7EjrUJE8wj9K8Z1ZPm5ExbTadja8zsVwK3Llz3DnIZzTuD-L/pub" target="_blank" rel="noopener noreferrer" className="contact-link">View</a></h5>
      </div>
    </Container>
  );
}

export default Contact;
