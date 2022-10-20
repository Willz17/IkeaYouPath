import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { getFromLocale } from "../utils/storage";

import "./AddedItemsList.css";

function Cart(props) {
  const CARTER_URL = process.env.REACT_APP_API_URL + "/users/cart";
  const SPECIFIC_PRODUCT_URL = process.env.REACT_APP_API_URL + "/products";

  const [ItemList, setItemList] = useState([]);
  const [showCards, setShowCards] = useState();

  useEffect(() => {
    if (getFromLocale("cred")) {
      let email = getFromLocale("cred").email;
      let list = [];
      const fetchCart = async (email) => {
        await axios
          .get(CARTER_URL + `/${email}`, { mode: "no-cors" })
          .then((res) => {
            let result = res.data;
            for (let r of result) {
              const item = getIt(r.name, r.p_ID, result.length);
              list.push(item);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

      fetchCart(email);
      setItemList(anotherlist);
    }
  }, []);
  let anotherlist = [];
  let counter = 0;
  const getIt = async (name, id, len) => {
    await axios
      .get(SPECIFIC_PRODUCT_URL + `/${name}/${id}`, { mode: "no-cors" })
      .then((res) => {
        if (anotherlist.length < len) {
          anotherlist.push(res.data);
          counter++;
          if (counter===len) {
            createCards(anotherlist, false);
          }else{
            createCards(anotherlist, true);

          }
          return res.data;
        }
      });
  };
  const [showLoader, setShowLoader] = useState();
  const createCards = (data, loadingPage) => {
    if (loadingPage) {
      setShowLoader(
        <div>
          <div class="loader"></div>
          <div class="outer-box">
            <nav class="social">
              <div class="box">
                <p>
                  Showing a display Loading Icon Until the Page Loads
                  Completely..
                </p>
              </div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="http://virender-bartwal.blogspot.in/"
                  >
                    <i
                      class="fa fa-link fa-3x text-success"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/veerbartwal">
                    <i
                      class="fa fa-twitter fa-3x text-success"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://codepen.io/bartwal">
                    <i
                      class="fa fa-codepen fa-3x text-success"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://in.linkedin.com/in/local-seo-freelancer-delhi"
                  >
                    <i
                      class="fa fa-linkedin-square fa-3x text-success"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://plus.google.com/+Virender-bartwalBlogspotIn"
                  >
                    <i
                      class="fa fa-google-plus fa-3x text-success"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    } else {
      setShowLoader("");
    }
    setShowCards(
      data.map((obj, index) => (
        <Row>
          <Container className="p-1 mb-0 w-100">
            <hr></hr>
            <Row>
              <div className="col-3 text-right">
                <img src={obj.img}></img>
              </div>
              <div className="col-6 text-left">
                <Row>
                  <h5>
                    <b>{obj.name.split(" - ")[0]}</b>
                  </h5>
                </Row>
                <Row>
                  <p>{obj.name.split(" - ")[1]}</p>
                </Row>
                <Row className="pt-5">
                  <DropdownButton id="dd_menu" title={numItems}>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                  </DropdownButton>
                </Row>
              </div>
              <div className="col-3 text-left">
                <b>${obj.price}</b>
              </div>
            </Row>
          </Container>
        </Row>
      ))
    );
  };

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
    <Container className="p-5">
      <Row className="pb-2">
        <h2>Your shopping cart</h2>
      </Row>
      {showLoader}
      {showCards}

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
          style={{ position: "fixed", bottom: "3%", right: "10%" }}
        >
          I am at IKEA
        </Button>

        <Button
          color="primary"
          className=" px-4 rounded-left rounded-right"
          onClick={routeChangeSearch}
          style={{ position: "fixed", bottom: "3%", left: "10%" }}
        >
          Add items
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
