import "./Cart.css";
import "./Buttons.css";
import CartItems from "./CartItems.js";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import Button from "react-bootstrap/esm/Button";

import Col from "react-bootstrap/esm/Col";
import axios from "axios";

import { saveToLocale, getFromLocale } from "../utils/storage";

function Cart(props) {
  // Item Creation
  let ItemList = [
    {
      name: "Knife",
      section: "Section 1",
      subSection: "Shelf 48",
      price: "50",
      coordinates: { x: 50, y: 30 },
      image:
        "https://www.militarysurplus.hu/eng_pm_Boker-Trench-Knive-Knife-40701_1.jpg",
    },
    {
      name: "Lamp",
      section: "Section 3",
      subSection: "Shelf 12",
      price: "35",
      coordinates: { x: 70, y: 90 },
      image:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: "Section 2",
      subSection: "Shelf 98",
      price: "60",
      coordinates: { x: 60, y: 76 },
      image:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    },
    {
      name: "Sofa",
      section: "Section 3",
      subSection: "Shelf 58",
      price: "40",
      coordinates: { x: 78, y: 20 },
      image:
        "https://www.ikea.com/es/es/images/products/linanas-sofa-3-plazas-vissle-beige__1013894_pe829446_s5.jpg?f=s",
    },
  ];

  // Item attributes array
  let itemName = [];
  let itemSection = [];
  let itemSubSection = [];
  let itemPrice = [];
  let itemCoordinates = [];
  let itemImage = [];

  ItemList.forEach((obj) => {
    itemName.push(obj.name);
    itemSection.push(obj.section);
    itemSubSection.push(obj.subSection);
    itemPrice.push(obj.price);
    itemCoordinates.push(obj.coordinates);
    itemImage.push(obj.image);
  });

  //Differentiate within Sections
  const ItemListTriggerSection1 = [];
  const ItemListTriggerSection2 = [];
  const ItemListTriggerSection3 = [];

  let section1Length = 0;
  let section2Length = 0;
  let section3Length = 0;

  ItemList.forEach((obj) => {
    if (obj.section === "Section 1") {
      ItemListTriggerSection1.push(obj);
      section1Length += 1;
    }
    if (obj.section === "Section 2") {
      ItemListTriggerSection2.push(obj);
      section2Length += 1;
    }
    if (obj.section === "Section 3") {
      ItemListTriggerSection3.push(obj);
      section3Length += 1;
    }
  });

  //Expand or collapse section
  const [addLabel1, setAddLabel1] = useState("Collapse");
  const [addLabel2, setAddLabel2] = useState("Collapse");
  const [addLabel3, setAddLabel3] = useState("Collapse");
  const [expansion1, setExpansion1] = useState(false);
  const [expansion2, setExpansion2] = useState(false);
  const [expansion3, setExpansion3] = useState(false);

  const handleClick1 = () => {
    if (addLabel1 === "Collapse") {
      setAddLabel1("Expand");
      setExpansion1(true);
    } else {
      setAddLabel1("Collapse");
      setExpansion1(false);
    }
  };
  const handleClick2 = () => {
    if (addLabel2 === "Collapse") {
      setAddLabel2("Expand");
      setExpansion2(true);
    } else {
      setAddLabel2("Collapse");
      setExpansion2(false);
    }
  };

  const handleClick3 = () => {
    if (addLabel3 === "Collapse") {
      setAddLabel3("Expand");
      setExpansion3(true);
    } else {
      setAddLabel3("Collapse");
      setExpansion3(false);
    }
  };

  //GENERAL LAYOUT

  if (!expansion1 && !expansion2 && !expansion3) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 1</b>
              </div>
              <div className="col-4">
                <Button size="sm" variant="primary" onClick={handleClick1}>
                  {addLabel1}
                </Button>
              </div>
              <div className="fs-6 col-4">0 min</div>
            </Row>
          </Container>

          {ItemListTriggerSection1.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section1Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 2</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick2}>
                  {addLabel2}
                </Button>
              </div>
              <div className="fs-6 col-4">1 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection2.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section2Length}
              recImage={ItemListTriggerSection1[0].image}
              recName={ItemListTriggerSection1[0].name}
            />
          ))}

          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 3</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick3}>
                  {addLabel3}
                </Button>
              </div>
              <div className="fs-6 col-4">2 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection3.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section3Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
        </Row>
      </Container>
    );
  } else if (expansion1) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 1</b>
              </div>
              <div className="col-4">
                <Button size="sm" variant="primary" onClick={handleClick1}>
                  {addLabel1}
                </Button>
              </div>
              <div className="fs-6 col-4">0 min</div>
            </Row>
          </Container>
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 2</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick2}>
                  {addLabel2}
                </Button>
              </div>
              <div className="fs-6 col-4">1 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection2.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section2Length}
              recImage={ItemListTriggerSection1[0].image}
              recName={ItemListTriggerSection1[0].name}
            />
          ))}

          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 3</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick3}>
                  {addLabel3}
                </Button>
              </div>
              <div className="fs-6 col-4">2 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection3.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section3Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
        </Row>
      </Container>
    );
  } else if (expansion2) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 1</b>
              </div>
              <div className="col-4">
                <Button size="sm" variant="primary" onClick={handleClick1}>
                  {addLabel1}
                </Button>
              </div>
              <div className="fs-6 col-4">0 min</div>
            </Row>
          </Container>

          {ItemListTriggerSection1.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section1Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 2</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick2}>
                  {addLabel2}
                </Button>
              </div>
              <div className="fs-6 col-4">1 min</div>
            </Row>
          </Container>

          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 3</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick3}>
                  {addLabel3}
                </Button>
              </div>
              <div className="fs-6 col-4">2 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection3.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section3Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
        </Row>
      </Container>
    );
  } else if (expansion3) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 1</b>
              </div>
              <div className="col-4">
                <Button size="sm" variant="primary" onClick={handleClick1}>
                  {addLabel1}
                </Button>
              </div>
              <div className="fs-6 col-4">0 min</div>
            </Row>
          </Container>

          {ItemListTriggerSection1.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section1Length}
              recImage={ItemListTriggerSection2[0].image}
              recName={ItemListTriggerSection2[0].name}
            />
          ))}
          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 2</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick2}>
                  {addLabel2}
                </Button>
              </div>
              <div className="fs-6 col-4">1 min</div>
            </Row>
          </Container>
          {ItemListTriggerSection2.map((obj, index) => (
            <CartItems
              name={obj.name}
              section={obj.section}
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={section2Length}
              recImage={ItemListTriggerSection1[0].image}
              recName={ItemListTriggerSection1[0].name}
            />
          ))}

          <Container
            style={{ backgroundColor: "white" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-4">
                <b>Section 3</b>
              </div>
              <div className="col-4">
                {" "}
                <Button size="sm" variant="primary" onClick={handleClick3}>
                  {addLabel3}
                </Button>
              </div>
              <div className="fs-6 col-4">2 min</div>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Cart;
