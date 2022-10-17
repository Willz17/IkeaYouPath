import React, { useState } from "react";

import "./NewList.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
const productList = [
  {
    name: "GLADELIG - Bowl",
    id: 1,
    section: "Tableware",
    coordinates: {},
    price: "13",
    description:
      "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.",
    img: "https://www.ikea.com/gb/en/images/products/gladelig-bowl-grey__0799737_pe767611_s5.jpg?f=l",
  },
  {
    name: "GLADELIG - Plate",
    id: 2,
    section: "Tableware",
    coordinates: {},
    price: "15",
    description:
      "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.        ",
    img: "https://www.ikea.com/gb/en/images/products/gladelig-plate-grey__0799744_pe767614_s5.jpg?f=l",
  },
  {
    name: "GLADELIG - Mug",
    id: 3,
    section: "Tableware",
    coordinates: {},
    price: "3",
    description:
      "The beautiful sandy-glazed surface turns every meal into pure joy. Decorate your table with clean classic shapes and a strong crafted look. A timeless feel with a unique and decorative design.",
    img: "https://www.ikea.com/gb/en/images/products/gladelig-mug-grey__0800258_pe767830_s5.jpg?f=l",
  },
];
let addToCart = [];

const NewList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResults] = useState();
  const [alerter, setAlerter] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [beforeSearch, setBeforeSearch] = useState(<div class="btn btn-outline-secondary bg-white border-end-0 rounded-left" onMouseDown={() => setBeforeSearch()} ><i class="fa fa-search"></i></div>);

  const formClickHandler = () => {
    setBeforeSearch(); 
    setShowSearch(
      <button
        class="btn btn-outline-secondary bg-white border-start-0 no-round-top-left rounded-right"
        type="submit"
      >
        <i class="fa fa-search"></i>
      </button>
    );
  }
  
  const createCards = (itemName, itemImage, itemSection, itemPrice) => {
    let solution;
    solution = itemName.map((item, index) => (
      <Card
        className="p-3"
        bg="light"
        style={{ width: "40%", display: "inline-block", margin: "1rem 1rem" }}
      >
        <Row className="align-items-center">
          <div className="col-md-3">
            <img
              src={itemImage[index]}
              alt="..."
              className="img-thumbnail"
            ></img>
          </div>
          <div className="col-md-6">
            {itemName[index]} <p>{"Price: $" + itemPrice[index]}</p>{" "}
            <p>{"Section: " + itemSection[index]}</p>
          </div>

          <div className="col-md-3">
            <Button
              className="align-self-end"
              variant="primary"
              type="submit"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                if (
                  addToCart.filter((en) => en.name === productList[index].name)
                    .length > 0
                ) {
                  setAlerter(
                    <Alert
                      key="warning"
                      variant="warning"
                      style={{
                        position: "fixed",
                        zIndex: "9999",
                        right: "45%",
                        top: "10%",
                      }}
                    >
                      Item already added!
                    </Alert>
                  );
                  // After 2 seconds we want the alert to dissapear
                  setTimeout(() => {
                    setAlerter("");
                  }, 2000);
                } else {
                  addToCart.push(productList[index]); //Send item to database that will be shown in the Cart page
                  setAlerter(
                    <Alert
                      key="success"
                      variant="success"
                      style={{
                        position: "fixed",
                        zIndex: "9999",
                        right: "40%",
                        top: "10%",
                      }}
                    >
                      Added {itemName[index]} to list!
                    </Alert>
                  );
                  // After 2 seconds we want the alert to dissapear
                  setTimeout(() => {
                    setAlerter("");
                  }, 2000);
                }
              }}
            >
              Add to Shoppinglist
            </Button>{" "}
          </div>
        </Row>
      </Card>
    ));
    setResults(solution);
    return addToCart;
  };

  const fetchItems = (event) => {
    //get data from API with searchTerm as input, productList = get(searchTerm)
    event.preventDefault();
    let itemName = [];
    let itemPrice = [];
    let itemSection = [];
    let itemImage = [];
    productList.forEach((obj) => {
      itemName.push(obj.name);
      itemPrice.push(obj.price);
      itemSection.push(obj.section);
      itemImage.push(obj.img);
    });
    createCards(itemName, itemImage, itemSection, itemPrice);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/shoppinglist";
    navigate(path);
  };

  return (
    <Container className="align-items-center" style={{ padding: "0px" }}>
      <Row className="align-items-center">
        <Container>
          <div >
            <form
              onSubmit={fetchItems}
              className="input-group mb-3 mt-5 w-75 center"
            >
              {beforeSearch}
              <input
                type="search"
                className="form-control rounded-left rounded-right"
                placeholder="Search for Item..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                onClick={formClickHandler}
                value={searchTerm}
              />
                {showSearch}
            </form>
            {alerter}
          </div>
        </Container>
      </Row>
      {result}
      
      <div className="p-5">
        <Button
          color="primary"
          className=" px-4 rounded-left rounded-right"
          onClick={routeChange}
          style={{ position: "fixed", bottom: "3%", right: "20%"}}
        >
          I am at IKEA
        </Button>
      </div>
    </Container>
  );
};

export default NewList;
