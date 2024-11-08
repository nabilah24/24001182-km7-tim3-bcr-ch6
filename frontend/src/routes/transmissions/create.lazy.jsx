import { createLazyFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { createTransmission } from '../../services/transmissions'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import BreadCrumb from 'react-bootstrap/BreadCrumb'
import Card from 'react-bootstrap/Card'

export const Route = createLazyFileRoute('/transmissions/create')({
  component: CreateTransmission,
})

function CreateTransmission() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [driveType, setDriveType] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      name,
      driveType,
      description
    }
    const result = await createTransmission(request)
    if (result?.success) {
      navigate({ to: '/transmissions' })
      return
    }

    toast.error(result?.message)
  }
  return (
    <Container className="my-4">
      <BreadCrumb>
        <BreadCrumb.Item linkAs={Link} linkProps={{ to: '/transmissions' }}>
          Home
        </BreadCrumb.Item>
        <BreadCrumb.Item active>Create Transmission</BreadCrumb.Item>
      </BreadCrumb>
      <h4 className="fw-bold mb-3">Create Transmission</h4>
      <Row className="mt-5">
        <Col md={9}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Create Transmission
            </Card.Header>
            <Card.Body>
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-4" controlId="name">
                  <Form.Label column sm={3} className="fw-semibold">
                    Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name Transmission"
                      required
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value)
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="driveType">
                  <Form.Label column sm={3} className="fw-semibold">
                    Drive Type
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Drive Type"
                      required
                      value={driveType}
                      onChange={(event) => {
                        setDriveType(event.target.value)
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="description">
                  <Form.Label column sm={3} className="fw-semibold">
                    Description
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Description"
                      required
                      value={description}
                      onChange={(event) => {
                        setDescription(event.target.value)
                      }}
                    />
                  </Col>
                </Form.Group>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button variant="primary" type="submit" className="me-2">
                      Submit Transmission
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
