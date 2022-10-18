import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const routeChangeInspired = () => {
    let path = "/shoppinglist";
    navigate(path);
  };
  
  const routeChangeHurry = () => {
    let path = "/shoppinglist";
    navigate(path);
  };
  
  let navigate = useNavigate();

  return (
    <Container>
      <Row className="text-center mt-5 pb-3">
        <h1><b>Hej and welcome to IKEA Kållered.</b></h1>
      </Row>

      <Row className="text-center mt-3 pb-3">
        <h2>How are you shopping today?</h2>
      </Row>

      <Row className="text-center mt-4 pb-3">
        <h5>
          {" "}
          In order to give you the best possible IKEA experience, we'd like to know how you are shopping today. 
          Are you looking for inspiration and would like some suggestions? Or are you trying to get your 
          items as quick as possible, and have a focused IKEA experience?
        </h5>
      </Row>

      <Row className="pt-4" style={{width: "50%", float: "right"}}>
      <Button className="rounded-left rounded-right" onClick={routeChangeInspired}>
        <h3>I feel inspired</h3>
      </Button>
      </Row>

      <Row className="pt-4" style={{width: "50%"}}>
      <Button className="rounded-left rounded-right" onClick={routeChangeHurry}>
        <h3>I'm in a hurry</h3>
      </Button>
      </Row>
    </Container>
  );
};

export default Home;
