import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Navbar.css";

import logo from "../../../images/logo2.png";
const activeStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  textAlign: "center",
  color: "red",
};
const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="Navbar py-3">
      <Container>
        
        <Row>
          <Col className="mt-3">
            <NavLink
              className="navItem py-5"
              activeStyle={activeStyle}
              to="/home"
            >
              <img
                alt=""
                src={logo}
                width="180"
                height="40"
                className="d-inline-block align-top"
              />
            </NavLink>
          </Col>
          <Col>
            <NavLink
              className="navItem ml-3"
              activeStyle={activeStyle}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink className="navItem" activeStyle={activeStyle} to="/tours">
              Tours
            </NavLink>

            <NavLink
              className="navItem"
              activeStyle={activeStyle}
              to="/contacts"
            >
              Contacts
            </NavLink>
            <NavLink className="navItem" activeStyle={activeStyle} to="/about">
              About
            </NavLink>

            {user?.email ? (
              <>
                <NavLink className="text-decoration-none me-3" to="/dashboard">
                  Dashboard
                </NavLink>
                <Button size="sm" variant="danger" onClick={logOut}>
                  Logout
                </Button>
                <NavLink className="text-decoration-none ms-3" to="#">
                  {user.displayName}
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">
                <Button size="sm" variant="primary">
                  LogIn
                </Button>
              </NavLink>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
