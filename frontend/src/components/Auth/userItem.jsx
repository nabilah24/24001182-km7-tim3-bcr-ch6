import { useSelector } from "react-redux";
import PropTypes from "prop-types";


const UserItem = ({ user, index }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <tr>
      <td>{index}</td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>{user?.password}</td>
      <td>{user?.photoProfile}</td>
      <td>{user?.createdAt}</td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default TypeItem;
