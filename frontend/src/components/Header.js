import React from "react";

import { Navbar, Nav, Container, Row } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <container>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="https://img.icons8.com/color/50/000000/shopping-cart-loaded.png"
                height="30px"
                width="40px"
              />{" "}
              Click to Cart
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-control="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </container>
    </header>
  );
}

export default Header;
