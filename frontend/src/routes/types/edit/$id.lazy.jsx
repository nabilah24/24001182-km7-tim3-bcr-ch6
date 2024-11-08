import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailTypeCar, updateTypeCar } from "../../../services/types/index";
import { toast } from "react-toastify";
import Protected from "../../../components/Auth/protected";

export const Route = createLazyFileRoute("/types/edit/$id")({
  component: () => (
    <Protected roles={[1]}>
      <EditTypeCar />
    </Protected>
  ),
});

function EditTypeCar() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetailTypeCarData = async (id) => {
      setIsLoading(true);
      const result = await getDetailTypeCar(id);
      if (result?.success) {
        setName(result.data?.name);
        setDescription(result.data?.description);
        setCapacity(result.data?.capacity);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };
  }, [id]);

  if (isNotFound) {
    navigate({ to: "/" });
    return;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    // Ensure capacity is a number
    const request = {
      name,
      description,
      capacity: parseInt(capacity, 10), // Convert to number
    };
    const result = await updateTypeCar(id, request);
    if (result?.success) {
      navigate({ to: `/types/${id}` });
      toast.success("Car type edited successfully!");
      return;
    }

    toast.error(result?.message);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Edit Car Type</Card.Header>
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
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
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
                  Edit Car Type
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
