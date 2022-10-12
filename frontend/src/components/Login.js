import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Margin.css";

const Login = () => {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
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
