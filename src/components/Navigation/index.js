import React from "react";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Mataja Maughan</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
