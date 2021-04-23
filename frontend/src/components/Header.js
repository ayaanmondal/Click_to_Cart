import React from "react";

import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../actions/userActions'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
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
              { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
              )}

              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </container>
    </header>
  );
}

export default Header;
