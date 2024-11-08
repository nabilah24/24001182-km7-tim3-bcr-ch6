import React, { useState } from "react";
import {
  Nav,
  Tooltip,
  OverlayTrigger,
  Dropdown,
  Image,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faGear,
  faGears,
  faIndustry,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ children }) => {
  return (
    <Container className="position-absolute" fluid>
      <Row>
        <Col className="col-sm-auto sticky-top bg-primary p-0 pb-5">
          <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
            <div
              style={{
                width: "50px",
                height: "30px",
                backgroundColor: "#CFD4ED",
              }}
              className="my-3"
            ></div>
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none d-flex flex-column text-white align-items-center"
              title="Cars"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <FontAwesomeIcon icon={faCarSide} className="fa-lg text-white" />
              Cars
            </a>
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none d-flex flex-column text-white align-items-center"
              title="Models"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <FontAwesomeIcon icon={faGear} className="fa-lg text-white" />
              Models
            </a>
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none d-flex flex-column text-white align-items-center"
              title="Manufactures"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <FontAwesomeIcon icon={faIndustry} className="fa-lg text-white" />
              Manufactures
            </a>
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none d-flex flex-column text-white align-items-center"
              title="Transmissions"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <FontAwesomeIcon icon={faWrench} className="fa-lg text-white" />
              Transmissions
            </a>
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none d-flex flex-column text-white align-items-center"
              title="Types"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <FontAwesomeIcon icon={faGears} className="fa-lg text-white" />
              Types
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;
