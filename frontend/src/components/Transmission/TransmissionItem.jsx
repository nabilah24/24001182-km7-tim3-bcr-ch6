import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "@tanstack/react-router";

const TransmissionItem = ({transmission}) => {
  return (
    <tr>
      <td>{transmission?.id}</td>
      <td>{transmission?.name}</td>
      <td>{transmission?.driveType}</td>
      <td>{transmission?.description}</td>
      <td className="text-center">
        <ButtonGroup>
          <Button
            as={Link}
            href={`/transmissions/${transmission?.id}`}
            variant="primary"
            className="me-2"
          >
            Detail
          </Button>
          <Button
            as={Link}
            href={`/transmissions/edit/${transmission?.id}`}
            variant="warning"
            className="me-2"
          >
            Update
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

TransmissionItem.propTypes = {
    transmission: PropTypes.object,
};

export default TransmissionItem;
