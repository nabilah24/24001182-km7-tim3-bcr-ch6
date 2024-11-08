import { Breadcrumb } from "react-bootstrap";
import { Link, useNavigate } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item as={Link} to="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} to="/cars" active>
        Cars
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
