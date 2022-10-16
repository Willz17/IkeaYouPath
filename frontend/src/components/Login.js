import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Margin.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const LOGIN_URL = "http://localhost:4000/api/users/login";
  // const [userData, setState] = useState[{}];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(email);
    const request_data = {
      email: email,
      password: password,
    };

    axios.post(LOGIN_URL, request_data, { mode: "no-cors" });
  };

  return (
    <div>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" onSubmit={loginUser}>
          Login
        </Button>
        <Button variant="link" type="button" href="/signup">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Login;
