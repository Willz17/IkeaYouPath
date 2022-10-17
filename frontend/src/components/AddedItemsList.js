import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Cart(props) {
  return (
    <Container>
      <Row className="pb-4">
        <h2>Your Cart</h2>
      </Row>

      <Row className="border-bottom rounded">
        <Container
          style={{ backgroundColor: "White" }}
          className="p-2 border-bottom rounded mb-0 w-100">
          <Row className="text-center">
            <div className="col-3">IMG</div>
            <div className="col-7">Item</div>
            <div className="col-2">Price</div>
          </Row>
        </Container>
        <Container
          style={{ backgroundColor: "White" }}
          className="p-2 border-bottom rounded mb-0 w-100">
          <Row className="text-center">
            <div className="col-3">IMG</div>
            <div className="col-7">Item</div>
            <div className="col-2">Price</div>
          </Row>
        </Container>        
      </Row>
      <Container
          style={{ backgroundColor: "White" }}
          className="p-2 border-bottom rounded mb-0 w-100">
          <Row className="text-center">
            <div className="col-4">Total price of products</div>
            <div className="col-4"></div>
            <div className="col-4">Price</div>
          </Row>
        </Container>
    </Container>
  );
}

export default Cart;
