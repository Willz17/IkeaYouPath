import "./Cart.css";
import "./Buttons.css";
import CartItems from "./CartItems.js";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Cart(props) {
  const ItemList = [
    {
      name: "Cool Knife",
      section: 4,
      price: 35,
      number: 1,
      coordinates: { x: 50, y: 30 },
      image:
        "https://www.militarysurplus.hu/eng_pm_Boker-Trench-Knive-Knife-40701_1.jpg",
    },
    {
      name: "Lamp",
      section: 3,
      price: 27,
      number: 1,
      coordinates: { x: 70, y: 90 },
      image:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: 1,
      price: 55,
      number: 2,
      coordinates: { x: 60, y: 76 },
      image:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    },
    {
      name: "Sofa",
      section: 4,
      price: 40,
      number: 1,
      coordinates: { x: 78, y: 20 },
      image:
        "https://www.ikea.com/es/es/images/products/linanas-sofa-3-plazas-vissle-beige__1013894_pe829446_s5.jpg?f=s",
    },
  ];

  var itemName = [];
  var itemSection = [];
  var itemPrice = [];
  var itemNumber = [];
  var itemCoordinates = [];
  var itemImage = [];

  ItemList.forEach((obj) => {
    itemName.push(obj.name);
    itemSection.push(obj.section);
    itemPrice.push(obj.price);
    itemNumber.push(obj.number);
    itemCoordinates.push(obj.coordinates);
    itemImage.push(obj.image);
  });

  // Final Price
  let FinalPrice = itemPrice.reduce((accumulator, value) => {
    return accumulator + value;
  });

  return (
    <Container>
      <Row>
        <p className="text-decoration-underline fw-bolder fst-italic mb-3 fs-1 text-capitalize">cart</p>
      </Row>

      <Row>
        <Col className="col-md-10"></Col>
        <Col className="col-md-2">
          <Row>
            <Button
              size="sm"
              type="button"
              class="btn btn-secondary btn-lg"
              className="mt-1 mb-1"
              disabled
            >
              Total Price: ${FinalPrice}
            </Button>
          </Row>
          <Row>
            <Button size="sm" variant="success">
              CHECKOUT
            </Button>
          </Row>
        </Col>
      </Row>

      <Row>
        <div className="ListText">
          {ItemList.map((obj, index) => (
            <CartItems
              name={itemName[index]}
              section={itemSection[index]}
              price={itemPrice[index]}
              coordinates={itemCoordinates[index]}
              number={itemNumber[index]}
              image={itemImage[index]}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default Cart;
