import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import "./Margin.css";
import { useState } from "react";
import axios from "axios";

import env from "react-dotenv";

const Login = () => {
  const LOGIN_URL = env.API_LOGIN;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

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
        setResponse(res.data);

        let data = response[0];
        data = {
          email: data.email,
          userID: data.id,
        };

        console.log(data);
        saveToLocale(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveToLocale = ({ email, userID }) => {
    let data = {
      email: email,
      userID: userID,
    };
    localStorage.setItem("cred", JSON.stringify(data));
  };

  return (
    <div>
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
          <Button style={{ width: "75%" }} variant="primary" type="submit">
            Login
          </Button>
        </Row>

        <Row className="justify-content-center pt-4">
          <Button
            className="border"
            style={{ width: "75%" }}
            variant="light"
            type="submit"
            href="/signup"
          >
            Signup
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
