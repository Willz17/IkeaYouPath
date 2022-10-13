import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <Container>
        <h2>Welcome</h2>

        <Row className="text-center mt-5">
            <h3>In order to give you the best experience while shopping, please
                select the persona that you believe currently fit you the best.
            </h3>
        </Row>

        <Card className="p-2 mt-4" bg="light" style={{ width: "auto" }}>
        <Row className="align-items-center">
          <div className="col-md-3 p-4">
            <img src="inspired.png" alt="inspired" className="img-fluid"></img>
          </div>

          <div className="col-md-7">
            <h5><b>Feeling Inspired.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer a quam sit amet est porttitor blandit. Pellentesque id turpis id tortor 
                pharetra imperdiet. Mauris interdum egestas mauris, vel mollis justo laoreet vitae. 
                Morbi faucibus, velit et luctus rutrum, urna tellus cursus tellus, 
                vel tempus massa risus eu metus. Morbi sodales volutpat turpis ac convallis.</h5>
          </div>

          <div className="col-md-2 p-4">
            <Button className="pull-right" variant="warning">
              I feel inspired
            </Button>
          </div>
        </Row>
      </Card>

      <Card className="p-2 mt-4" bg="light" style={{ width: "auto" }}>
        <Row className="align-items-center">
          <div className="col-md-3 p-4">
            <img src="hurry.png" alt="hurry" className="img-fluid"></img>
          </div>

          <div className="col-md-7">
            <h5><b>In a rush.</b> Donec rutrum suscipit euismod. Nullam sed felis id nulla pretium 
                sollicitudin id in sem. Phasellus facilisis justo leo, nec 
                condimentum lectus posuere cursus. Praesent pharetra semper augue, 
                vitae malesuada lorem tempor non. Nulla nec semper tortor.</h5>
          </div>

          <div className="col-md-2 p-4">
            <Button className="pull-right" variant="warning">
              I'm in a hurry
            </Button>
          </div>
        </Row>
      </Card>
    </Container>
    );
}

export default Home;
