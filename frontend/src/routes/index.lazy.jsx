import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from "../components/BreadCrumb";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there any token
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [navigate, token]);

  return (
    <>
      <BreadCrumb />
      <Row className="d-flex ">
        <Col>
          <h4 className="fw-bold">Cars List</h4>
        </Col>
        <Col>
          <Button variant="primary">Primary</Button>
        </Col>
      </Row>
    </>
  );
}
