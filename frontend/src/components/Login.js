import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./Margin.css";
import { useState } from "react";
import axios from "axios";
import { saveToLocale, getFromLocale } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const LOGIN_URL = "https://api-you-path.azurewebsites.net/api/users/login";
  const LOGIN_URL = "http://localhost:4000/api/users/login";

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(email, password);
    const request_data = {
      email: email,
      password: password,
    };

    axios
      .post(LOGIN_URL, request_data, { mode: "no-cors" })
      .then((res) => {
        let data = res.data;
        console.log(data);
        saveToLocale({
          email: data.email,
          userID: data._id,
          key: "cred",
        });
        navigate("/search");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Row className="justify-content-center pt-3">
          <Button
            style={{ width: "75%" }}
            variant="primary"
            type="submit"
            size="lg"
          >
            Login
          </Button>
        </Row>

        <Row className="justify-content-center pt-4">
          <Button
            className="border"
            style={{ width: "75%" }}
            size="lg"
            variant="light"
            type="submit"
            href="/signup"
          >
            Signup
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
