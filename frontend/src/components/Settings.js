import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Margin.css";

const Settings = () => {
  return (
    <Container>
      <h2>User Settings</h2>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Old password</Form.Label>
            <Form.Control type="New password" placeholder="Old password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New password</Form.Label>
            <Form.Control type="New password" placeholder="New password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repeat new password</Form.Label>
            <Form.Control type="password" placeholder="Repeat new password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>

      <h2>App Settings</h2>
      <Container>
        <Row>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Dark mode" />
          </Form.Group>
          <Button variant="primary" type="submit" size="md">
            Update
          </Button>
          </Form>
        </Row>
      </Container>
    </Container>
  );
};

export default Settings;
