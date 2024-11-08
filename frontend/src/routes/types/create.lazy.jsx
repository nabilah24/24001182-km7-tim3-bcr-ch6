import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createTypeCar } from "../../services/types/index";
import { toast } from "react-toastify";
import Protected from "../../components/";

export const Route = createLazyFileRoute("/types/create")({
  component: () => (
    <Protected roles={[1]}>
      <CreateTypeCar />
    </Protected>
  ),
});

function CreateTypeCar() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Ensure capacity is a number
    const request = {
      name,
      description,
      capacity: parseInt(capacity, 10), // Convert to number
    };

    const result = await createTypeCar(request);
    if (result?.success) {
      navigate({ to: "/" });
      toast.success("Car type created successfully!");
      return;
    }

    toast.error(result?.message);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Create Car Type</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm={3}>
                  Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm={3}>
                  Description
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="capacity">
                <Form.Label column sm={3}>
                  Capacity
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Capacity"
                    required
                    value={capacity}
                    onChange={(event) => setCapacity(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Create Car Type
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
