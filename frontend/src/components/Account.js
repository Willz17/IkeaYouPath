import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { saveToLocale, getFromLocale, clearLocale } from "../utils/storage";
import "./Margin.css"

const Account = () => {
  if (getFromLocale("cred")){
    return (
      <Container className="pt-4">
        <h4><b>User:</b> {getFromLocale("cred").email}</h4>
        <Nav activeKey="/settings">
          <Row className="align-text-left">
            <Nav.Item>
              <Nav.Link href="/settings">
                <h2>Settings</h2>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={clearLocale} href="/search">
                <h2>Logout</h2>
              </Nav.Link>
            </Nav.Item>
          </Row>
        </Nav>
      </Container>
    );
  }
  else{
    return (
      <Container className="pt-4">
        <Nav activeKey="/settings">
          <Row className="align-text-left">
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
  }

};

export default Account;
