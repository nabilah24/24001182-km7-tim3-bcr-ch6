import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/slices/auth";
import { login } from "../services/auth";

export const Route = createLazyFileRoute("/login")({
    component: Login,
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // get token from local storage
        if (token) {
            navigate({ to: "/" });
        }
    }, [navigate, token]);

    const onSubmit = async (event) => {
        event.preventDefault();

        /* hit the login API */
        // define the request body
        const body = {
            email,
            password,
        };

        // hit the login API with the data
        const result = await login(body);
        if (result.success) {
            // set token to global state
            dispatch(setToken(result.message.token));

            // redirect to home
            navigate({ to: "/" });
            return;
        }

        alert(result?.message);
    };

    return (
      <Container fluid className="d-flex vh-70 p-0">
            <Row className="w-100 m-0">
                {/* Left side with image */}
                <Col
                    md={7}
                    style={{
                        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/293b/474b/7604a9eda79ef119b2c8196e3c8773d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZODb1Cfo9rwd9uOiWFnqdx8DgRDzG2XAOWIfxJ5G6YHLdFU8FcVi-~oHczDxVzw9SKGHMEyqVtPVO7VfQ1fZAXP3bAB8DpvU7YWjB4k8OsOPhWJ1hm3-KFgorn5WcV1hgI~m36wooGk2mZ4SEuV-mVMVs86RagT07QCYdLWQOrnSYE8FXyFB~s49m6J02aTWeqZKB86I3XT1bMPFRj3PJzMgvZ6W3QPr2esCvo~SxIbEpDLE9BRmUJ8RBN3HuJzkWkRDXjIWhff6bP3tudmJYAy1-624oE1MFx5QnLSnXYhMOvfBaM5MpbJ2E64vGpTRJXoR5j-v09qJ~~ngQlnDg__')", // Replace with your image URL
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "90vh",
                    }}
                ></Col>

                {/* Right side with form */}
                <Col
                    md={5}
                    className="d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#f8f9fa", height: "90vh" }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            padding: "2rem",
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            
                        }}
                    >
                        <h2>Welcome, Admin BCR</h2>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="email"
                            >
                                <Form.Label column sm={3}>
                                    Email
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="password"
                            >
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="primary">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }