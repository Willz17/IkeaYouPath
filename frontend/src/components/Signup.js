import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Margin.css";
import axios from "axios";

import "./Signup.css";

const Signup = () => {
  const REGISTER_URL = process.env.REACT_APP_API_URL + "/users/register";
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerNewUser = async (event) => {
    console.log(event);
    event.preventDefault();
    console.log(email);

    const request_data = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };

    const res = await axios.post(REGISTER_URL, request_data, {
      mode: "no-cors",
    });
    let data = res.data;
    if (data.code === 200) {
      alert("Account successfully registered!");
      navigate("/login");
    } else alert("Email already in use!");
  };

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);

  return (
    <Container>
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

        <Form.Group className="mb-5">
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <hr></hr>

        <Row className="pt-2 pb-3 mx-2">Which of these describe you best?</Row>

        <Row>
          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check1"
            type="checkbox"
            variant="light"
            checked={checked1}
            value="1"
            onChange={(e) => {
              setChecked1(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Creative
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check2"
            type="checkbox"
            variant="light"
            checked={checked2}
            value="2"
            onChange={(e) => {
              setChecked2(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Student
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check3"
            type="checkbox"
            variant="light"
            checked={checked3}
            value="3"
            onChange={(e) => {
              setChecked3(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Adventurous
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check4"
            type="checkbox"
            variant="light"
            checked={checked4}
            value="4"
            onChange={(e) => {
              setChecked4(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Parent
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check5"
            type="checkbox"
            variant="light"
            checked={checked5}
            value="5"
            onChange={(e) => {
              setChecked5(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Living alone
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check6"
            type="checkbox"
            variant="light"
            checked={checked6}
            value="6"
            onChange={(e) => {
              setChecked6(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Living in an partment
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check7"
            type="checkbox"
            variant="light"
            checked={checked7}
            value="7"
            onChange={(e) => {
              setChecked7(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Modern
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check8"
            type="checkbox"
            variant="light"
            checked={checked8}
            value="8"
            onChange={(e) => {
              setChecked8(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Classic
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check9"
            type="checkbox"
            variant="light"
            checked={checked9}
            value="9"
            onChange={(e) => {
              setChecked9(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Pet
          </ToggleButton>

          <ToggleButton
            className="rounded-left rounded-right m-2"
            style={{ width: "auto" }}
            id="toggle-check10"
            type="checkbox"
            variant="light"
            checked={checked10}
            value="10"
            onChange={(e) => {
              setChecked10(e.currentTarget.checked);
              e.preventDefault();
            }}
          >
            Chique
          </ToggleButton>
        </Row>

        <hr></hr>

        <Row className="justify-content-center pt-4">
          <Button
            className="border mt-4"
            style={{ width: "35%" }}
            variant="light"
            type="submit"
            size="lg"
            onSubmit={registerNewUser}
          >
            Signup
          </Button>
          <Button
            variant="secondary"
            type="submit"
            size="lg"
            className="mt-4 mx-4"
            style={{ width: "35%" }}
            href="/login"
          >
            Back
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
