import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { deleteTypeCar, getDetailTypeCar } from '../../services/types/index'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import { useSelector } from 'react-redux'

export const Route = createLazyFileRoute('/types/$id')({
  component: TypeCarDetail,
})

function TypeCarDetail() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  const [typeCar, setTypeCar] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)

  useEffect(() => {
    const getDetailTypeCarData = async (id) => {
      setIsLoading(true)
      const result = await getDetailTypeCar(id)
      if (result?.success) {
        setTypeCar(result.data)
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
      }
      setIsLoading(false)
    }

    if (id) {
      getDetailTypeCarData(id)
    }
  }, [id])

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Loading...</h1>
        </Col>
      </Row>
    )
  }

  if (isNotFound) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Car type is not found!</h1>
        </Col>
      </Row>
    )
  }

  const onDelete = async (event) => {
    event.preventDefault()

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this data?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const result = await deleteTypeCar(id)
            if (result?.success) {
              navigate({ to: '/' })
              toast.success('Car type deleted successfully!')
              return
            }

            toast.error(result?.message)
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    })
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{number++}</th>
              <th>{typeCar?.name}</th>
              <th>{typeCar?.description}</th>
              <th>{typeCar?.capacity}</th>

              {user?.roleId === 1 && (
                <td>
                  <div className="d-flex gap-2">
                    <Button
                      as={Link}
                      to={`/types/edit/${id}`}
                      variant="primary"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button onClick={onDelete} variant="danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              )}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}
