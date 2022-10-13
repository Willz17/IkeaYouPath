import "./CartItems.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

function CartItems(props) {
  const [addNumber, setAddNumber] = useState(1);
  const [deleteItem, setDeleteItem] = useState(props.name);
  const [deleteItem2, setDeleteItem2] = useState(props.section);

  const handleAddNumber = () => {
    setAddNumber(props.number + addNumber);
  };

  const handleDecreaseNumber = () => {
    setAddNumber(addNumber - props.number);
  };
  const handleDeleteItem = () => {
    setDeleteItem('Deleted');
    setDeleteItem2('None')
  };

  return (
    <Container className="p-3 bg-light square border border-1 rounded mt-2 mb-2">
      <Row className="align-items-center">
        <Col className="align-items-center col-md-4">
          <div>
            <img className="imageCenter" src={props.image}></img>
          </div>
        </Col>
        <Col className="col-md-5">
          <span>
            {deleteItem}&nbsp;&nbsp;&nbsp;&nbsp;
            <b>
              Section:&nbsp;{deleteItem2}&nbsp;|&nbsp;Price:&nbsp;
              {props.price}
            </b>
          </span>
        </Col>
        <Col className="col-md-3">
          <Row>
            <h6>Number of items: {addNumber}&nbsp;</h6>
          </Row>
          <Row>
            <Col>
              <Button
                size="sm"
                variant="primary"
                type="button"
                onClick={handleAddNumber}
              >
                +1
              </Button>
              <Button
                variant="primary"
                size="sm"
                type="button"
                className="mx-2"
                onClick={handleDecreaseNumber}
              >
                -1
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="d-grid gap-2">
              <Button
                type="button"
                class="btn btn-block"
                className="mt-1 mb-1"
                variant="danger"
                size="sm"
                onClick={handleDeleteItem}
              >
                X
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CartItems;
