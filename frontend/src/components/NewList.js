import React, { useEffect, useState } from "react";

import "./NewList.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

import env from "react-dotenv";

let addToCart = [];

const NewList = () => {
  const PRODUCT_URL = env.API_GET_PRODUCTS;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(PRODUCT_URL, { mode: "no-cors" })
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchItems();
  }, [productList]);

  // let productList = allItems on API
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
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResults] = useState();

  const [alerter, setAlerter] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [beforeSearch, setBeforeSearch] = useState(
    <div
      class="btn btn-outline-secondary grey-bg border-end-0 rounded-left"
      onMouseDown={() => setBeforeSearch()}
    >
      <i class="fa fa-search"></i>
    </div>
  );

  const formClickHandler = () => {
    setBeforeSearch();
    setShowSearch(
      <button
        class="btn btn-outline-secondary grey-bg border-start-0 no-round-top-left rounded-right"
        type="submit"
      >
        <i class="fa fa-search"></i>
      </button>
    );
  };

  const createCards = (itemName, itemImage, itemSection, itemPrice) => {
    let solution;
    solution = itemName.map((item, index) => (
      <Card
        className="p-3 shift-it-to-left"
        style={{
          width: "40%",
          display: "inline-block",
          margin: "1rem 1rem",
          border: "none",
        }}
      >
        <Row className="align-items-center">
          <div className="col-md-3">
            <img
              src={itemImage[index]}
              alt="..."
              className="img-thumbnail"
              style={{ border: "none" }}
            ></img>
          </div>
          <div className="col-md-6 fontStyling">
            {itemName[index]}{" "}
            <p className="priceStyling">
              <span className="dollarStyling">$</span>
              {+itemPrice[index]}{" "}
              <p className="sectionStyling">
                {"Section: " + itemSection[index]}
              </p>
            </p>
          </div>

          <div className="col-md-3">
            <Button
              className="align-self-end rounded-left rounded-right"
              variant="warning"
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
                  addToCart.push(productList[index].id); //Send item to database that will be shown in the Cart page
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
                      Added {productList[index].name} to list!
                    </Alert>
                  );
                  // After 2 seconds we want the alert to dissapear
                  setTimeout(() => {
                    setAlerter("");
                  }, 2000);
                }
              }}
            >
              <img
                src="addBasket.png"
                alt="addBasket"
                className="pb-1"
                style={{ width: "1.4rem" }}
              ></img>
            </Button>{" "}
          </div>
        </Row>
      </Card>
    ));
    setResults(solution);
    return addToCart;
  };

  const fetchItems = (event) => {
    console.log(productList);
    //get data from API with searchTerm as input, productList = get(searchTerm)
    itemName = [];
    itemPrice = [];
    itemSection = [];
    itemImage = [];
    productList.forEach((obj) => {
      itemName.push(obj.name);
      itemPrice.push(obj.price);
      itemSection.push(obj.section);
      itemImage.push(obj.img);
    });
    console.log(productList);
    createCards(itemName, itemImage, itemSection, itemPrice);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/shoppinglist";
    navigate(path);
  };
  const getSpecificProduct = (event) => {
    event.preventDefault();
    axios.get(`${PRODUCT_URL}/search/${searchTerm}`).then((res) => {
      setProductList(res.data);
    });
  };

  return (
    <Container
      className="align-items-center shift-it-to-left px-3"
      style={{ padding: "0px" }}
    >
      <Row className="align-items-center">
        <Container>
          <div className="shift-it-to-left">
            <form
              onSubmit={getSpecificProduct}
              className="input-group mb-3 mt-5 w-75 center"
            >
              {beforeSearch}
              {/* {productList.map(p => <div>{p.name}</div>)} */}
              <input
                type="search"
                className="form-control rounded-left rounded-right align-items-center"
                placeholder="Search for Item..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  formClickHandler();
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
          style={{ position: "fixed", bottom: "3%", right: "20%" }}
        >
          I am at IKEA
        </Button>
      </div>
    </Container>
  );
};

export default NewList;
