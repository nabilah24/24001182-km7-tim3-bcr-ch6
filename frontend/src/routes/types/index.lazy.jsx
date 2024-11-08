import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Table, Pagination } from "react-bootstrap";
import { getTypeCars } from "../../services/types/index";
import BreadCrumb from "../../components/BreadCrumb/index";

export const Route = createLazyFileRoute("/types")({
  component: Types,
});

function Types() {
  const { token } = useSelector((state) => state.auth);

  const [types, setTypeCars] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const getTypeCarData = async () => {
      setIsLoading(true);
      const result = await getTypeCarData();
      if (result.success) {
        setTypeCars(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getTypeCarData();
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
        <h1 className="text-center">
          Please login first to get car type data!
        </h1>
        </Col>
      </Row>
    );
  }

  if (isLoading) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <Row className="mt-4">
      {types.length === 0 ? (
        <h1>Car type data is not found!</h1>
      ) : (
        <Container className="p-2 mt-2" style={{ marginLeft: "12vw" }}>
          <BreadCrumb />
          <Row className="d-flex ">
            <Col>
              <h4 className="fw-bold">Dashboard</h4>
            </Col>
          </Row>

          {/* List Order Table */}
          <Row className="mt-4">
            <Col>
              <h5 className="fw-bold">List Order</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User Email</th>
                    <th>Car</th>
                    <th>Start Rent</th>
                    <th>Finish Rent</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data, ideally should be mapped from a state or props */}
                  {Array.from({ length: 10 }, (_, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Status</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Pagination */}
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>

          {/* List Car Table */}
          <Row className="mt-4">
            <Col>
              <h5 className="fw-bold">List Car</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Start Rent</th>
                    <th>Finish Rent</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data */}
                  {Array.from({ length: 10 }, (_, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>Name</td>
                      <td>Category</td>
                      <td>Price</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Created at</td>
                      <td>Updated at</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      )}
    </Row>
  );
}
