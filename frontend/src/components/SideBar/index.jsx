import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "@tanstack/react-router";

const SideBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "200px",
        backgroundColor: "#0D6EFD",
        color: "white",
        paddingTop: "20px",
        zIndex: 1000,
      }}
    >
      <Container fluid className="d-flex flex-column align-items-start px-3">
        {/* Logo or Title */}
        <Nav.Link as={Link} to="/">
          <h5 className="text-white mb-4 text-center">BCR MANAGEMENT</h5>
        </Nav.Link>
        {/* Navigation Links */}
        <Nav className="flex-column fw-semibold w-100">
          <Nav.Link as={Link} to="/" className="text-white my-2">
            <i className="bi bi-house-door-fill me-2"></i> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/cars" className="text-white my-2">
            <i className="bi bi-car-front-fill me-2"></i> Cars List
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default SideBar;
