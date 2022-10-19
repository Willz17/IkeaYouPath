import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Margin.css";

const Settings = () => {
  return (
    <Container className="pt-4">
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

          <Form.Group className="mb-5">
            <Form.Text className="text-muted">
              We will never share your information with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>

      <h2>App Settings</h2>
      <Container className="pt-3">
        <Row>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Dark mode" className="align-items-left !important"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Suggest items based on your shopping list" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Suggest discounted items" />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg" className="mt-4" style={{width: "35%"}}>
            Update
          </Button>
          <Button variant="danger" type="submit" size="lg" className="mt-4 mx-4" style={{width: "35%"}}>
            Logout
          </Button>
          </Form>
        </Row>
      </Container>
    </Container>
  );
};

export default Settings;
