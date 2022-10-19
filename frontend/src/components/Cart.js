import "./Cart.css";
import "./cart_navigation/Buttons.css";

import "./Buttons.css";
import CartItems from "./CartItems.js";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeader from "./cart_navigation/SectionHeader";
import Section_Item from "./cart_navigation/Section_Item";
import ProgressBar from "./cart_navigation/ProgressBar";

import { saveToLocale, getFromLocale } from "../utils/storage";

function Cart(props) {
  // Item Creation
  let ItemList = [
    {
      name: "Knife",
      section: "Kitchen",
      subSection: "Shelf 48",
      price: "50",
      image:
        "https://www.militarysurplus.hu/eng_pm_Boker-Trench-Knive-Knife-40701_1.jpg",
    },
    {
      name: "Lamp",
      section: "Lighting",
      subSection: "Shelf 12",
      price: "35",
      image:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: "Dining Room",
      subSection: "Shelf 98",
      price: "60",
      image:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    },
    {
      name: "Sofa",
      section: "Home Decoration",
      subSection: "Shelf 58",
      price: "40",
      image:
        "https://www.ikea.com/es/es/images/products/linanas-sofa-3-plazas-vissle-beige__1013894_pe829446_s5.jpg?f=s",
    },
    {
      name: "Towel",
      section: "Bathroom",
      subSection: "Shelf 8",
      price: "56",
      image:
        "https://www.ikea.com/ae/en/images/products/dimforsen-bath-towel-turquoise__1022793_pe832914_s5.jpg?f=xxxs",
    },
    {
      name: "Pillow",
      section: "Bedroom",
      subSection: "Shelf 45",
      price: "80",
      image:
        "https://www.target.com.au/medias/static_content/product/images/full/84/33/A1698433.jpg?impolicy=product_portrait_hero",
    },
  ];

  // Item attributes array
  let itemName = [];
  let itemSection = [];
  let itemSubSection = [];
  let itemPrice = [];
  let itemImage = [];

  ItemList.forEach((obj) => {
    itemName.push(obj.name);
    itemSection.push(obj.section);
    itemSubSection.push(obj.subSection);
    itemPrice.push(obj.price);
    itemImage.push(obj.image);
  });

  //Differentiate within Sections
  const ItemListTriggerDR = [];
  const ItemListTriggerK = [];
  const ItemListTriggerB = [];
  const ItemListTriggerBT = [];
  const ItemListTriggerHD = [];
  const ItemListTriggerL = [];

  ItemList.forEach((obj) => {
    if (obj.section === "Dining Room") {
      ItemListTriggerDR.push(obj);
    }
    if (obj.section === "Kitchen") {
      ItemListTriggerK.push(obj);
    }
    if (obj.section === "Bedroom") {
      ItemListTriggerB.push(obj);
    }
    if (obj.section === "Bathroom") {
      ItemListTriggerBT.push(obj);
    }
    if (obj.section === "Home Decoration") {
      ItemListTriggerHD.push(obj);
    }
    if (obj.section === "Lighting") {
      ItemListTriggerL.push(obj);
    }
  });

  const [collapse, setCollapse] = useState(false);
  const [naming, setNaming] = useState(ItemListTriggerDR[0].name);

  const expandCollapse = () => {
    if (collapse === false) {
      setCollapse(true);
      setNaming(ItemListTriggerK[0].name);
    } else {
      setNaming(ItemListTriggerDR[0].name);
      setCollapse(false);
    }
  };

  const testData1 = [{ bgcolor: "#21579D", completed: 0 }];
  const testData2 = [{ bgcolor: "#21579D", completed: 17 }];

  let minutes = 0;
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

  if (!collapse) {
    return (
      <Container className="mt-4">
        <Row class="first-row">
          <p>
            Next on your shopping list: <b>{naming}</b>
          </p>
        </Row>
        <Row>
          <SectionHeader
            expandCollapse={() => expandCollapse()}
            secName={"Dining Room"}
            time={minutes}
          />
          <Section_Item ItemListing={[ItemListTriggerDR, ItemListTriggerB]} />
          <SectionHeader secName={"Kitchen"} time={1} />
          <Section_Item ItemListing={[ItemListTriggerK, ItemListTriggerB]} />
          <SectionHeader secName={"Bedroom"} time={2} />
          <Section_Item ItemListing={[ItemListTriggerB, ItemListTriggerB]} />
          <SectionHeader secName={"Bathroom"} time={3} />
          <Section_Item ItemListing={[ItemListTriggerBT, ItemListTriggerB]} />
          <SectionHeader secName={"Home Decoration"} time={3} />
          <Section_Item ItemListing={[ItemListTriggerHD, ItemListTriggerB]} />
          <SectionHeader secName={"Lighting"} time={4} />
          <Section_Item ItemListing={[ItemListTriggerL, ItemListTriggerB]} />
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
      <Container>
        <Row class="first-row">
          <p>
            Next on your shopping list: <b>{naming}</b>
          </p>
          </Row>
          
        <Row>
          <SectionHeader
            expandCollapse={() => expandCollapse()}
            secName={"Dining Room"}
            time={minutes}
          />
          <SectionHeader secName={"Kitchen"} time={0} />
          <Section_Item ItemListing={[ItemListTriggerK, ItemListTriggerB]} />
          <SectionHeader secName={"Bedroom"} time={1} />
          <Section_Item ItemListing={[ItemListTriggerB, ItemListTriggerB]} />
          <SectionHeader secName={"Bathroom"} time={2} />
          <Section_Item ItemListing={[ItemListTriggerBT, ItemListTriggerB]} />
          <SectionHeader secName={"Home Decoration"} time={2} />
          <Section_Item ItemListing={[ItemListTriggerHD, ItemListTriggerB]} />
          <SectionHeader secName={"Lighting"} time={3} />
          <Section_Item ItemListing={[ItemListTriggerL, ItemListTriggerB]} />
        </Row>
        <div className=" align-items-center">
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
