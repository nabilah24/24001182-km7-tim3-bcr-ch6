import React from "react";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faHome,
  faCarSide,
  faGear,
  faGears,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item my-2">
                <Link to="/" className="nav-link align-middle px-0 text-white">
                  <FontAwesomeIcon icon={faHome} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Dashboards</span>
                </Link>
              </li>

              <li className="my-2">
                <Link
                  to="/cars"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FontAwesomeIcon icon={faCarSide} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Cars</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/models"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FontAwesomeIcon icon={faGear} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Models</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/manufactures"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FontAwesomeIcon icon={faIndustry} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Manufactures</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/transmissions"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FontAwesomeIcon icon={faWrench} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Transmissions</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/types"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FontAwesomeIcon icon={faGears} className="fs-4" />{" "}
                  <span className="ms-4 d-none d-sm-inline">Types</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
