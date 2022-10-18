import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";

import "./AddedItemsList.css"

function Cart(props) {
  const ItemList = [
    {
      name: "GLADELIG - Bowl",
      id: 1,
      section: "Tableware",
      coordinates: {},
      price: "12.99",
      description:
        "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.",
      img: "https://www.ikea.com/gb/en/images/products/gladelig-bowl-grey__0799737_pe767611_s5.jpg?f=l",
    },
    {
      name: "GLADELIG - Plate",
      id: 2,
      section: "Tableware",
      coordinates: {},
      price: "14.99",
      description:
        "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.        ",
      img: "https://www.ikea.com/gb/en/images/products/gladelig-plate-grey__0799744_pe767614_s5.jpg?f=l",
    },
    {
      name: "GLADELIG - Mug",
      id: 3,
      section: "Tableware",
      coordinates: {},
      price: "2.99",
      description:
        "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.",
      img: "https://www.ikea.com/gb/en/images/products/gladelig-mug-grey__0800258_pe767830_s5.jpg?f=l",
    },
  ];

  let itemName = [];
  let itemSubSection = [];
  let itemPrice = [];
  let itemImage = [];

  ItemList.forEach((obj) => {
    itemName.push(obj.name);
    itemSubSection.push(obj.subSection);
    itemPrice.push(obj.price);
    itemImage.push(obj.img);
  });

  let totalPrice = 0;

  itemPrice.forEach((obj) => {
    totalPrice += parseFloat(obj);
  });

  let navigate = useNavigate();

  const routeChangeSearch = () => {
    let path = "/search";
    navigate(path);
  };

  const routeChangeNav = () => {
    let path = "/welcome";
    navigate(path);
  };

  const [numItems, setNumItems] = useState(1);

  return (
    <Container>
      <Row className="pb-2">
        <h2>Your shopping cart</h2>
      </Row>

      {itemName.map((obj, index) => (
        <Row>
          <Container className="p-1 mb-0 w-100">
            <hr></hr>
            <Row>
              <div className="col-3 text-right">
                <img src={itemImage[index]}></img>
              </div>
              <div className="col-6 text-left">
                <Row>{itemName[index]}</Row>
                <Row className="pt-5">
                  <DropdownButton id="dd_menu" title={numItems}>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                  </DropdownButton>
                </Row>
              </div>
              <div className="col-3 text-left">${itemPrice[index]}</div>
            </Row>
          </Container>
        </Row>
      ))}

      <Container className="pt-5">
        <Row className="text-left">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            Order summary
          </div>
          <div className="col-6"></div>
        </Row>
      </Container>

      <hr style={{ border: "1px solid black" }}></hr>

      <Container className="p-2 border-none mb-0 w-100">
        <Row className="text-left">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            Subtotal
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <h5 style={{ fontWeight: "bold" }}>${totalPrice}</h5>
          </div>
        </Row>
      </Container>

      <div className="p-5">
        <Button
          color="primary"
          className=" px-4 rounded-left rounded-right"
          onClick={routeChangeNav}
          style={{ position: "fixed", bottom: "3%", right: "10%" }}>
            I am at IKEA
        </Button>

        <Button
          color="primary"
          className=" px-4 rounded-left rounded-right"
          onClick={routeChangeSearch}
          style={{ position: "fixed", bottom: "3%", left: "10%" }}>
            Add items
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
