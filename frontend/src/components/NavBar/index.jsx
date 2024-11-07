import { Link, useNavigate } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../services/auth";


const NavigationBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        const getProfile = async () => {
            // fetch get profile
            const result = await profile();
            if (result.success) {
                // set the user state here
                dispatch(setUser(result.message));
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
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-primary" style={{backgroundColor: "#B7B7B7"}}>
            <Container>
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
                                        src={user?.profile_picture}
                                        fluid
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                        }}
                                    />{" "}
                                    {user?.name}
                                </Nav.Link>
                                <Nav.Link onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};
function Sidebar() {
  return (
    <div style={{ width: '250px', background: '#0D6EFD', color: 'white', minHeight: '100vh' }}>
      <Nav defaultActiveKey="/home" className="flex-column p-3">
        <h4>Dashboard</h4>
        <Nav.Link href="#cars" className="text-white">Cars</Nav.Link>
      </Nav>
    </div>
  );
}

export default NavigationBar;