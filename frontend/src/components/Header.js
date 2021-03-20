import React from "react";

import { Navbar, Nav, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <header>
      <container>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Brand href="/home">
            <img
              src="https://img.icons8.com/color/50/000000/shopping-cart-loaded.png"
              height="30px"
              width="40px"
            />{" "}
            Click to Cart
          </Navbar.Brand>
          <Navbar.Toggle aria-control="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </container>
    </header>
  );
}

export default Header;
