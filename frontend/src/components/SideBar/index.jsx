import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "@tanstack/react-router";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-row position-absolute"
      style={{ zIndex: "-900", left: "60px" }}
    >
      <Container
        style={{
          width: "200px",
          height: "100vh",
          color: "black",
        }}
        className="mx-0"
      >
        <Nav className="flex-column fw-semibold" style={{ marginTop: "15vh" }}>
          <Nav.Link as={Link} to="/cars" className="text-black">
            Cars List
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default SideBar;
