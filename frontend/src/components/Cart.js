import "./Cart.css";
import "./cart_navigation/Buttons.css";

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeader from "./cart_navigation/SectionHeader";
import Section_Item from "./cart_navigation/Section_Item";
import ProgressBar from "./cart_navigation/ProgressBar";
import axios from "axios";

import { getFromLocale } from "../utils/storage";

function Cart(props) {
  // Item Creation
  let itemListTriggerDR2 = [
    {
      name: "ÅSVANG - Foam mattress",
      id: 52,
      section: "Bedroom",
      coordinates: {},
      price: "119",
      description: "Firm/white, 160x200 cm",
      img: "https://www.ikea.com/nl/en/images/products/asvang-foam-mattress-firm-white__0986619_pe818095_s5.jpg?f=s",
    },
    {
      name: "ULLVIDE - Pillowcase",
      id: 25,
      section: "Bedroom",
      coordinates: {},
      price: "6",
      description: "White",
      img: "https://www.ikea.com/gb/en/images/products/ullvide-pillowcase-white__0607075_pe682722_s5.jpg?f=m",
    },
    {
      name: "ULLVIDE - Fitted sheet",
      id: 26,
      section: "Bedroom",
      coordinates: {},
      price: "15",
      description: "White",
      img: "https://www.ikea.com/gb/en/images/products/ullvide-fitted-sheet-white__0604096_pe681036_s5.jpg?f=xl",
    },
  ];
  const CARTER_URL = process.env.REACT_APP_API_URL + "/users/cart";
  const SPECIFIC_PRODUCT_URL = process.env.REACT_APP_API_URL + "/products";

  const [ItemList, setItemList] = useState([]);

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
  const getIt = async (name, id, len) => {
    await axios
      .get(SPECIFIC_PRODUCT_URL + `/${name}/${id}`, { mode: "no-cors" })
      .then((res) => {
        if (anotherlist.length < len) {
          anotherlist.push(res.data);
          createItems(anotherlist);
          return res.data;
        }
      });
  };

  const ItemListTriggerDR = [];
  const ItemListTriggerK = [];
  const ItemListTriggerB = [];
  const ItemListTriggerBT = [];
  const ItemListTriggerHD = [];
  const ItemListTriggerL = [];
  const [showItems, setShowItems] = useState();
  const createItems = (data) => {
    data.forEach((obj) => {
      if (obj.section === "Dining room") {
        ItemListTriggerDR.push(obj);
      }
      if (obj.section === "Kitchen") {
        ItemListTriggerK.push(obj);
        // console.log(obj);
      }
      if (obj.section === "Bedroom") {
        ItemListTriggerB.push(obj);
      }
      if (obj.section === "Bathroom") {
        ItemListTriggerBT.push(obj);
      }
      if (obj.section === "Home decoration") {
        ItemListTriggerHD.push(obj);
      }
      if (obj.section === "Lighting") {
        ItemListTriggerL.push(obj);
      }
    });
    setNaming(ItemListTriggerB[0].name);
    setShowItems(
      <div>
        <SectionHeader
          expandCollapse={() => {
            setCollapse(true);
            setNaming(ItemListTriggerK[0].name);
          }}
          secName={"Bedroom"}
          time={minutes}
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerB.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Kitchen"} time={1} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerK.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Dining Room"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerDR.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Bathroom"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Home Decoration"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Lighting"} time={4} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
      </div>
    );

    setShowLessItems(
      <div>
        <SectionHeader
          expandCollapse={() => {
            setCollapse(false);
            setNaming(ItemListTriggerB[0].name);
          }}
          secName={"Bedroom"}
          time={minutes}
        />
        <SectionHeader secName={"Kitchen"} time={1} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerK.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Dining Room"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerDR.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Bathroom"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Home Decoration"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
        <SectionHeader secName={"Lighting"} time={4} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
        />
      </div>
    );
  };
  // Item attributes array
  // console.log(ItemList)
  //Differentiate within Sections

  const [collapse, setCollapse] = useState(false);
  const [naming, setNaming] = useState("");
  const [showLessItems, setShowLessItems] = useState();

  const expandCollapse = () => {
    if (collapse === false) {
      setCollapse(true);
      setNaming("Hello");
    } else {
      setNaming("Hello");
      setCollapse(false);
    }
  };

  const testData1 = [{ bgcolor: "#21579D", completed: 0 }];
  const testData2 = [{ bgcolor: "#21579D", completed: 17 }];

  let minutes = 0;
  //Expand or collapse section

  //GENERAL LAYOUT

  if (!collapse) {
    return (
      <Container className="mt-4">
        <Row class="first-row">
          <p>
            Next on your shopping list: <b>{naming}</b>
          </p>
        </Row>
        <Row>{showItems}</Row>
        <div className="align-items-center mt-2 px-2">
          {testData1.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </Container>
    );
  } else if (collapse) {
    return (
      <Container className="mt-4">
        <Row class="first-row">
          <p>
            Next on your shopping list: <b>{naming}</b>
          </p>
        </Row>
        <Row>{showLessItems}</Row>
        <div className="align-items-center mt-2 px-2">
          {testData2.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default Cart;
