import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Button from "react-bootstrap/Button"

function SectionHeader(props) {
  const { expandCollapse } = props;
  let section = props.secName;
  return (
    <Container
      style={{ backgroundColor: "white" }}
      className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
    >
      <Row className="text-center">
        <div className="fs-6 col-5">
          <b>{section}</b>
        </div>
        <div className="col-3">
          <Button variant="outline-none" onClick={() => expandCollapse()}>
          <img src="down-arrow.png" alt="basket" style={{ width: "1.2rem" }}></img>
          </Button>
        </div>
        <div className="fs-6 col-4">{props.time} minutes</div>
      </Row>
    </Container>
  );
}

export default SectionHeader;
