import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../SideBar";

const SideNav = () => {
  return (
    <>
      <SideBar />
      <Container
        style={{
          width: "5vw",
          height: "100vh",
          backgroundColor: "blue",
        }}
        className="mx-0 d-flex justify-content-center"
      >
        <Nav className="d-flex flex-column text-center mt-3">
          <Nav.Item>
            <Nav.Link eventKey="disabled" className="text-white" disabled>
              BCR
            </Nav.Link>
          </Nav.Item>
          <Nav.Link as={Link} to="/cars" className="text-white mt-4">
            <FontAwesomeIcon icon={faCarSide} className="fa-lg" />
            Cars
          </Nav.Link>
        </Nav>
      </Container>
    </>
  );
};

export default SideNav;
