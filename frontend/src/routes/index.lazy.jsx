import * as React from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import BreadCrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUsers } from "../services/auth";
import { getCars } from "../services/cars";
import { getModels } from "../services/models";
import { getManufactures } from "../services/manufactures";
import { getTransmissions } from "../services/transmissions";
import { getTypeCars } from "../services/types";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { user, token } = useSelector((state) => state.auth);

  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [manufactures, setManufactures] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [types, setTypeCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Tentukan jumlah item per halaman

  useEffect(() => {
    const getAllData = async () => {
      setIsLoading(true);
      try {
        const [
          userData,
          carData,
          modelData,
          manufactureData,
          transmissionData,
          typeData,
        ] = await Promise.all([
          getUsers(),
          getCars(),
          getModels(),
          getManufactures(),
          getTransmissions(),
          getTypeCars(),
        ]);

        setUsers(userData.data);
        setCars(carData.data);
        setModels(modelData.data);
        setManufactures(manufactureData.data);
        setTransmissions(transmissionData.data);
        setTypeCars(typeData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      getAllData();
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Please login first to get the data!</h1>
        </Col>
      </Row>
    );
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
    );
  }

  const paginate = (data) => {
    if (!Array.isArray(data)) return []; // Ensure data is an array
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };


  // Fungsi untuk beralih halaman
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="my-4">
      <BreadCrumb>
        <BreadCrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Dashboard
        </BreadCrumb.Item>
        <BreadCrumb.Item linkAs={Link} linkProps={{ to: "/cars" }}>
          Cars
        </BreadCrumb.Item>
      </BreadCrumb>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h4 className="fw-bold mb-3 mb-md-0">Dashboard</h4>
      </div>

      {/* List Users */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h5 className="fw-bold mb-3 mb-md-0">
          <FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />
          List Users
        </h5>
      </div>
      <div className="table-responsive mt-4">
        <Table bordered hover className="mb-0">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Photo Profile</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {paginate(users).length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <strong>Data is not found!</strong>
                </td>
              </tr>
            ) : (
              paginate(users).map((user, index) => (
                <UserItem
                  type={user}
                  key={user?.id}
                  index={(currentPage - 1) * itemsPerPage + index + 1}
                ></UserItem>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination for Users */}
      {users.length > 0 && (
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(users.length / itemsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={currentPage === number + 1}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
          />
        </Pagination>
      )}

      {/* List Cars */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <h5 className="fw-bold mb-3 mb-md-0">
          <FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />
          List Cars
        </h5>
      </div>
      <div className="table-responsive mt-4">
        <Table bordered hover className="mb-0">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Plate</th>
              <th>Model</th>
              <th>Manufacture</th>
              <th>Transmission</th>
              <th>Type</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {paginate(cars).length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <strong>Data is not found!</strong>
                </td>
              </tr>
            ) : (
              paginate(cars).map((car, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{car?.plate}</td>
                  <td>
                    {models.find((model) => model.id === car.modelId)?.name}
                  </td>
                  <td>
                    {
                      manufactures.find(
                        (manufacture) => manufacture.id === car.manufactureId
                      )?.name
                    }
                  </td>
                  <td>
                    {
                      transmissions.find(
                        (transmission) => transmission.id === car.transmissionId
                      )?.name
                    }
                  </td>
                  <td>{types.find((type) => type.id === car.typeId)?.name}</td>
                  <td>{car?.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination for Cars */}
      {cars.length > 0 && (
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(cars.length / itemsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={currentPage === number + 1}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(cars.length / itemsPerPage)}
          />
        </Pagination>
      )}

      {/* List Manufactures */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h5 className="fw-bold mb-3 mb-md-0">
          <FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />
          List Manufactures
        </h5>
      </div>
      <div className="table-responsive mt-4">
        <Table bordered hover className="mb-0">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Manufacture</th>
              <th>Country</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {paginate(manufactures).length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <strong>Data is not found!</strong>
                </td>
              </tr>
            ) : (
              paginate(manufactures).map((manufacture, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{manufacture?.name}</td>
                  <td>{manufacture?.country}</td>
                  <td>{manufacture?.createdAt}</td>
                  <td>{manufacture?.updatedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination for Users */}
      {manufactures.length > 0 && (
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(manufactures.length / itemsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={currentPage === number + 1}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(manufactures.length / itemsPerPage)
            }
          />
        </Pagination>
      )}

      {/* List Transmissions */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h5 className="fw-bold mb-3 mb-md-0"><FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />List Transmissions</h5>
      </div>
      <div className="table-responsive mt-4">
        <Table bordered hover className="mb-0">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Transmission</th>
              <th>Driver Type</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {paginate(transmissions).length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <strong>Data is not found!</strong>
                </td>
              </tr>
            ) : (
              paginate(transmissions).map((transmission, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transmission?.name}</td>
                  <td>{transmission?.driveType}</td>
                  <td>{transmission?.description}</td>
                  <td>{transmission?.createdAt}</td>
                  <td>{transmission?.updatedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination for Users */}
      {transmissions.length > 0 && (
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[
            ...Array(Math.ceil(transmissions.length / itemsPerPage)).keys(),
          ].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={currentPage === number + 1}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(transmissions.length / itemsPerPage)
            }
          />
        </Pagination>
      )}

      {/* List Types */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h5 className="fw-bold mb-3 mb-md-0">
          <FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />
          List Types
        </h5>
      </div>
      <div className="table-responsive mt-4">
        <Table bordered hover className="mb-0">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Type</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {paginate(manufactures).length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <strong>Data is not found!</strong>
                </td>
              </tr>
            ) : (
              paginate(types).map((type, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{type?.name}</td>
                  <td>{type?.description}</td>
                  <td>{type?.capacity}</td>
                  <td>{type?.createdAt}</td>
                  <td>{type?.updatedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination for Users */}
      {types.length > 0 && (
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(types.length / itemsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={currentPage === number + 1}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(types.length / itemsPerPage)}
          />
        </Pagination>
      )}
    </Container>
  );
}
