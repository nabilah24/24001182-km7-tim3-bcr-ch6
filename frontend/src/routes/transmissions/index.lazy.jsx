import Container from 'react-bootstrap/Container';
import BreadCrumb from 'react-bootstrap/BreadCrumb';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { getTransmissions } from '../../services/transmissions';
import TransmissionItem from '../../components/Transmission/TransmissionItem';
import { confirmAlert } from "react-confirm-alert";

export const Route = createLazyFileRoute('/transmissions/')({
  component: IndexTransmission,
})

function IndexTransmission() {
  const { user, token } = useSelector((state) => state.auth)

  const [transmissions, setTransmissions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTransmissionData = async () => {
      setIsLoading(true)
      const result = await getTransmissions()
      if (result.success) {
        setTransmissions(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getTransmissionData()
    }
  }, [token])

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">
            Please login first to get Transmission data!
          </h1>
        </Col>
      </Row>
    )
  }

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col className="text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Col>
      </Row>
    )
  }

  return (
      <Container className="my-4">
        <BreadCrumb>
          <BreadCrumb.Item linkAs={Link} linkProps={{ to: "/transmissions" }}>Transmissions</BreadCrumb.Item>
        </BreadCrumb>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h4 className="fw-bold mb-3 mb-md-0">Transmission List</h4>
          {user?.roleId === 1 && (
          <Button 
            as={Link}
            href={`/transmissions/create`}  
            variant="primary" 
            className="rounded-0"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>Create Transmission</span>
          </Button>
          )}
        </div>

        {/* Responsive Table */}
        <div className="table-responsive mt-4">
          <Table bordered hover className="mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DriveType</th>
                <th className="text-center">Description</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {transmissions.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    <strong>Transmission data not found!</strong>
                  </td>
                </tr>
              ) : (
                transmissions.map((transmission) => (
                  <TransmissionItem transmission={transmission} key={transmission?.id} />
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>
  )
}
