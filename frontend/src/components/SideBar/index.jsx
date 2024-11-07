import React, { useState } from "react";
import { Nav, Tooltip, OverlayTrigger, Dropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderTooltip = (props, message) => (
    <Tooltip id="button-tooltip" {...props}>
      {message}
    </Tooltip>
  );

  return (
    <div
      className="d-flex align-items-center flex-column flex-shrink-0"
      style={{ width: "4.5rem" }}
    >
      <div>
        <a
          href="/"
          className="d-block p-3 link-body-emphasis text-decoration-none fw-semibold"
        >
          <span>BCR</span>
        </a>
      </div>

      <Nav className="nav-pills nav-flush flex-column mb-auto text-center">
        <Nav.Item>
          <Nav.Link
            href="#"
            className="nav-link active py-3 border-bottom rounded-0"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faCarSide} className="fa-lg" />
            Cars
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
          ></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <OverlayTrigger
            placement="right"
            overlay={(props) => renderTooltip(props, "Orders")}
          >
            <Nav.Link
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
            ></Nav.Link>
          </OverlayTrigger>
        </Nav.Item>

        <Nav.Item>
          <OverlayTrigger
            placement="right"
            overlay={(props) => renderTooltip(props, "Products")}
          >
            <Nav.Link
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
            ></Nav.Link>
          </OverlayTrigger>
        </Nav.Item>

        <Nav.Item>
          <OverlayTrigger
            placement="right"
            overlay={(props) => renderTooltip(props, "Customers")}
          >
            <Nav.Link
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
            ></Nav.Link>
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

      <Dropdown
        className="border-top"
        show={dropdownOpen}
        onToggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <Dropdown.Toggle
          variant="link"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none"
        >
          <Image
            src="https://github.com/mdo.png"
            roundedCircle
            width="24"
            height="24"
            alt="mdo"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="text-small shadow">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
