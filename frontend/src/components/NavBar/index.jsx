import { Link, useNavigate } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../services/auth";
import SideBar from "../SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProfile = async () => {
      // fetch get profile
      const result = await profile();
      if (result.success) {
        // set the user state here
        dispatch(setUser(result.data));
        return;
      }

      // If not success
      // delete the local storage here
      dispatch(setUser(null));
      dispatch(setToken(null));

      // redirect to login
      navigate({ to: "/login" });
    };

    if (token) {
      // hit api auth get profile and pass the token to the function
      getProfile();
    }
  }, [dispatch, navigate, token]);

  const logout = (event) => {
    event.preventDefault();

    // delete the local storage here
    dispatch(setUser(null));
    dispatch(setToken(null));

    // redirect to login
    navigate({ to: "/login" });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-primary shadow-sm"
      >
        <Container>
          <div className="text-body-secondary fs-4 fw-bold ">
            BINAR CAR RENTAL
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* {user && user?.role_id === 1 && (
                      <Nav.Link as={Link} to="/students/create">
                          Create Student
                      </Nav.Link>
                  )} */}
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    <Image
                      src={user?.profilePicture}
                      fluid
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        overflow: "hidden",
                        borderRadius: "50%",
                      }}
                    />
                  </Nav.Link>
                  <NavDropdown title={user?.name} id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">
                      <Nav.Link as={Link} to="/profile">
                        Profile
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.1">
                      <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;