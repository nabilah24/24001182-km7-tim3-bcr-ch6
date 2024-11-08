import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTachometerAlt, faTable, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            <Link
              to="/"
              className="d-block p-3 link-dark text-decoration-none"
              title="Dashboard"
            >
              <FontAwesomeIcon icon={faHome} className="fs-1" />
            </Link>
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li>
                <Link
                  to="/dashboard"
                  className="nav-link py-3 px-2"
                  title="Dashboard"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} className="fs-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="nav-link py-3 px-2"
                  title="Orders"
                >
                  <FontAwesomeIcon icon={faTable} className="fs-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="nav-link py-3 px-2"
                  title="Products"
                >
                  <FontAwesomeIcon icon={faHeart} className="fs-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="nav-link py-3 px-2"
                  title="Customers"
                >
                  <FontAwesomeIcon icon={faUsers} className="fs-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm p-3 min-vh-100">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
