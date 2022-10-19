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
      name: "Knife",
      section: "Kitchen",
      subSection: "Shelf 48",
      price: "50",
      img:
        "https://www.militarysurplus.hu/eng_pm_Boker-Trench-Knive-Knife-40701_1.jpg",
    },
    {
      name: "Lamp",
      section: "Lighting",
      subSection: "Shelf 12",
      price: "35",
      img:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: "Dining Room",
      subSection: "Shelf 98",
      price: "60",
      img:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    }
  ];
  const CARTER_URL = "https://api-you-path.azurewebsites.net/api/users/cart";
  const SPECIFIC_PRODUCT_URL =
    "https://api-you-path.azurewebsites.net/api/products";

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
      if (obj.section === "Dining room" ) {
        ItemListTriggerDR.push(obj);
      }
      if (obj.section === "Kitchen" ) {
        ItemListTriggerK.push(obj);
        console.log(obj);
      }
      if (obj.section === "Bedroom" ) {
        ItemListTriggerB.push(obj);
      }
      if (obj.section === "Bathroom" ) {
        ItemListTriggerBT.push(obj);
      }
      if (obj.section === "Home decoration" ) {
        ItemListTriggerHD.push(obj);
      }
      if (obj.section === "Lighting" ) {
        ItemListTriggerL.push(obj);
      }
    });
    setNaming(ItemListTriggerDR[0].name)
    setShowItems(
      <div>
        <SectionHeader
            expandCollapse={() => {setCollapse(true); setNaming(ItemListTriggerK[0].name) }}
            secName={"Dining Room"}
            time={minutes}
          />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerDR.map(item => [item['id'], item])).values()], itemListTriggerDR2]} />
        <SectionHeader secName={"Kitchen"} time={1} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerK.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Bedroom"} time={2} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerB.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Bathroom"} time={3} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerBT.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Home Decoration"} time={3} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerHD.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Lighting"} time={4} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerL.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
      </div>
    );

    setShowLessItems(
      <div>
        <SectionHeader
            expandCollapse={() => {setCollapse(false); setNaming(ItemListTriggerDR[0].name) }}
            secName={"Dining Room"}
            time={minutes}
          />
        <SectionHeader secName={"Kitchen"} time={1} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerK.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Bedroom"} time={2} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerB.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Bathroom"} time={3} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerBT.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Home Decoration"} time={3} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerHD.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
        <SectionHeader secName={"Lighting"} time={4} />
        <Section_Item ItemListing={[[...new Map(ItemListTriggerL.map(item => [item['id'], item])).values()], ItemListTriggerB]} />
      </div>
    )

  };
  // Item attributes array
  console.log(ItemList)
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
        <Row>
          
          {showItems}
        </Row>
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
      <Row>
        
        {showLessItems}
      </Row>
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
