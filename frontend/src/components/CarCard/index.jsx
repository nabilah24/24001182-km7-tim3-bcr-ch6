import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CarCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <Button variant="primary">
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#fa2c5a" }} />
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
