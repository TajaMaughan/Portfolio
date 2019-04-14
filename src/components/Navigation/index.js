import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const Navigation = () => {
  return (     
    <div>
  <h1 className="nav-name text-center">
        Mataja Maughan
      </h1>
    <Navbar className="justify-content-center">

      <Nav.Item >
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Navbar></div> 
  );
};

export default Navigation;
