import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand>Mataja Maughan</Navbar.Brand>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
        </Navbar>
    )
}

export default Navigation;