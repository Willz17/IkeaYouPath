import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

const Account = () => {
  return (
    <Container>
      <Nav activeKey="/settings">
        <Row>

          <Nav.Item>
            <Nav.Link href="/settings">
              <h2>Settings</h2>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/login">
              <h2>Login</h2>
            </Nav.Link>
          </Nav.Item>

        </Row>
      </Nav>
    </Container>
  );
};

export default Account;
