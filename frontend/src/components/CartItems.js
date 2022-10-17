import "./CartItems.css";
import "./Buttons.css";
import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Cart from "./Cart.js";

function CartItems(props) {
  //Recommendations Trigger

  // Communicate with item layout
    return (
      <Container
        style={{ backgroundColor: "white" }}
        className="mx-2 square border border-1 rounded mb-0 w-100"
      >
        <Row className="align-items-center">
          <div class="col-4">
            <div>
              <img src={props.image}></img>
            </div>
          </div>

          <div class="col-3">
            <div className="p-3">
              <p>
                <b>{props.name}</b>
              </p>
            </div>
          </div>

          <div class="col-3">
            <p>{props.subSection}</p>
          </div>

          <div class="align-items-left col-2">
            <input class="radio" type="radio"/>
          </div>
        </Row>
      </Container>
    );
}
export default CartItems;