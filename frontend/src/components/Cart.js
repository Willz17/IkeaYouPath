import "./Cart.css";
import "./Buttons.css";
import CartItems from "./CartItems.js";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Cart(props) {
  // Item Creation
  const ItemList = [
    {
      name: "Cool Knife",
      section: "Section 1",
      price: "50",
      coordinates: { x: 50, y: 30 },
      image:
        "https://www.militarysurplus.hu/eng_pm_Boker-Trench-Knive-Knife-40701_1.jpg",
    },
    {
      name: "Lamp",
      section: "Section 2",
      price: "35",
      coordinates: { x: 70, y: 90 },
      image:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: "Section 3",
      price: "60",
      coordinates: { x: 60, y: 76 },
      image:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    },
    {
      name: "Sofa",
      section: "Section 1",
      price: "40",
      coordinates: { x: 78, y: 20 },
      image:
        "https://www.ikea.com/es/es/images/products/linanas-sofa-3-plazas-vissle-beige__1013894_pe829446_s5.jpg?f=s",
    },
  ];

  // Item attributes array
  let itemName = [];
  let itemSection = [];
  let itemPrice = [];
  let itemCoordinates = [];
  let itemImage = [];

  ItemList.forEach((obj) => {
    itemName.push(obj.name);
    itemSection.push(obj.section);
    itemPrice.push(obj.price);
    itemCoordinates.push(obj.coordinates);
    itemImage.push(obj.image);
  });

  // Final Price
  let FinalPrice = itemPrice.reduce((accumulator, value) => {
    return parseInt(accumulator) + parseInt(value);
  });

  //Differentiate within Sections
  const ItemListTriggerSection1 = [];
  const ItemListTriggerSection2 = [];
  const ItemListTriggerSection3 = [];

  ItemList.forEach((obj) => {
    if (obj.section === "Section 1") {
      ItemListTriggerSection1.push(obj);
    }
    if (obj.section === "Section 2") {
      ItemListTriggerSection2.push(obj);
    }
    if (obj.section === "Section 3") {
      ItemListTriggerSection3.push(obj);
    }
  });

  return (
    <Container>
      <Row>
        <h2>Shop List</h2>
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
              Display
            </Button>
          </Row>
        </Col>
      </Row>

      <Row>
        <Container
          style={{ backgroundColor: "FloralWhite" }}
          className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
        >
          <Row className="text-center">
          <div className="fs-6 col-6">Section 3</div>
          <div className="fs-6 col-6">Current Section</div>
          </Row>
        </Container>

        {ItemListTriggerSection1.map((obj, index) => (
          <CartItems
            name={obj.name}
            section={obj.section}
            price={obj.price}
            coordinates={obj.coordinates}
            number={obj.number}
            image={obj.image}
          />
        ))}

        <Container
          style={{ backgroundColor: "FloralWhite" }}
          className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
        >
          <Row className="text-center">
          <div className="fs-6 col-6">Section 2</div>
          <div className="fs-6 col-6">1 min</div>
          </Row>
        </Container>
        {ItemListTriggerSection2.map((obj, index) => (
          <CartItems
            name={obj.name}
            section={obj.section}
            price={obj.price}
            coordinates={obj.coordinates}
            number={obj.number}
            image={obj.image}
          />
        ))}

        <Container
          style={{ backgroundColor: "FloralWhite" }}
          className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
        >
          <Row className="text-center">
            <div className="fs-6 col-6">Section 3</div>
            <div className="fs-6 col-6">2 min</div>
          </Row>
        </Container>
        {ItemListTriggerSection3.map((obj, index) => (
          <CartItems
            name={obj.name}
            section={obj.section}
            price={obj.price}
            coordinates={obj.coordinates}
            number={obj.number}
            image={obj.image}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Cart;
