import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a token
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [navigate, token]);

  return (
    <div className="p-4">
        {/* Welcome Section */}
        <Row className="mb-4">
          <Col>
            <h3 className="mb-2">Welcome to BCR Management</h3>
            <h4>You're logged in as {user?.name}</h4>
          </Col>
        </Row>

        {/* Dashboard Widgets Section */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {/* Widget 1 */}
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Total Sales</Card.Title>
                <Card.Text>
                  <h5>$12,350</h5>
                  <small>Since last month</small>
                </Card.Text>
                <Button variant="primary" className="w-100">
                  View Sales
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Widget 2 */}
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Orders Pending</Card.Title>
                <Card.Text>
                  <h5>25</h5>
                  <small>New orders waiting</small>
                </Card.Text>
                <Button variant="warning" className="w-100">
                  View Orders
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Widget 3 */}
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Customers</Card.Title>
                <Card.Text>
                  <h5>230</h5>
                  <small>Active customers</small>
                </Card.Text>
                <Button variant="success" className="w-100">
                  Manage Customers
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Widget 4 */}
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>New Products</Card.Title>
                <Card.Text>
                  <h5>18</h5>
                  <small>Recently added products</small>
                </Card.Text>
                <Button variant="info" className="w-100">
                  View Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
}
