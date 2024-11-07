import { Container, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useNavigate } from "@tanstack/react-router";
import SideNav from "../SideNav";

const NavBar = () => {
  return (
    <div className="d-flex">
      <SideNav />
      <Navbar
        className="shadow-sm"
        style={{
          width: "100vw",
          height: "12vh",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">BINAR CAR RENTAL</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-2">
            <Nav xs={6} md={4}>
              <Image src="holder.js/171x180" roundedCircle />
            </Nav>

            <Navbar.Text>
              <a href="#login">Mark Otto</a>
            </Navbar.Text>

            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
