import "./CartItems.css";
import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

function CartItems(props) {
  const [addNumber, setAddNumber] = useState(1);
  const [addedItem, setAddedItem] = useState("");
  const [nameColor, setNameColor] = useState("");

  const handleAddNumber = () => {
    setAddNumber(1 + addNumber);
  };

  const handleDecreaseNumber = () => {
    if (addNumber === 0) {
      setAddNumber(0);
    } else {
      setAddNumber(addNumber - 1);
    }
  };

  const handleAdded = () => {
    if (addedItem === "") {
      setAddedItem("Item collected.");
    } else if (addedItem === "Item collected.") {
      setAddedItem("");
    }
    if (nameColor === "") {
      setNameColor("bg-success text-white");
    } else if (nameColor === "bg-success text-white") {
      setNameColor("");
    }
  };

  const handleDeleteItem = () => {};

  return (
    <Container
      style={{ backgroundColor: "white" }}
      className="mx-2 square border border-1 rounded mb-0 w-100"
    >
      <Row className="align-items-center">
        <div class="col-2">
          <input
            className="SubmitButton"
            type="checkbox"
            onClick={handleAdded}
          ></input>
          <label className="inputCls">{addedItem}</label>
        </div>

        <div class="col-4">
          <div>
            <img src={props.image}></img>
          </div>
        </div>

        <div class="col-3">
          <p class={nameColor}>{props.name}</p>
        </div>

        <div class="align-items-left col-3">
          <p>Price: ${props.price}</p>
        </div>
      </Row>
    </Container>
  );
}

export default CartItems;
