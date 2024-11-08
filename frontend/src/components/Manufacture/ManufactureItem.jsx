import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "@tanstack/react-router";

const ManufactureItem = ({ manufacture }) => {
  return (
    <tr>
      <td>{manufacture?.id}</td>
      <td>{manufacture?.name}</td>
      <td>{manufacture?.country}</td>
      <td className="text-center">
        <ButtonGroup>
          <Button
            as={Link}
            href={`/manufactures/${manufacture?.id}`}
            variant="primary"
            className="me-2"
          >
            Detail
          </Button>
          <Button
            as={Link}
            href={`/manufactures/edit/${manufacture?.id}`}
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

ManufactureItem.propTypes = {
  manufacture: PropTypes.object,
};

export default ManufactureItem;
