import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../action/userAction";

const NavBar = () => {
  const dispatch = useDispatch();

  const state1 = useSelector((state) => state.cardReducer);

  const userState = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userState;

  console.log(state1);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="bg light">
        <Container>
          <Navbar.Brand href="/">
            <h2 className="bg-danger text-white p-1">PIZZA-MUSCAT</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              {currentUser ? (
                <LinkContainer to="/">
                  {/* <Nav.Link className="text-warning" >{currentUser.name}</Nav.Link> */}
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/order">
                      <NavDropdown.Item>Order</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      {" "}
                      logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>Cart{state1.cardItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
