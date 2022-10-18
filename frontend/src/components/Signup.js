import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Margin.css";
import { useState } from "react";
import axios from "axios";

import env from "react-dotenv";

const Signup = () => {
  const REGISTER_URL = env.API_SIGN_UP;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerNewUser = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(email);
    const request_data = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };

    axios.post(REGISTER_URL, request_data, { mode: "no-cors" });
  };

  return (
    <div>
      <Form onSubmit={registerNewUser}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
