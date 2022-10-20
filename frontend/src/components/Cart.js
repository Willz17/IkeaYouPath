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
      subsection: 23,
      img: "https://www.ikea.com/nl/en/images/products/asvang-foam-mattress-firm-white__0986619_pe818095_s5.jpg?f=s",
    },
    {
      name: "ULLVIDE - Pillowcase",
      id: 25,
      section: "Bedroom",
      coordinates: {},
      price: "6",
      description: "White",
      subsection: 72,
      img: "https://www.ikea.com/gb/en/images/products/ullvide-pillowcase-white__0607075_pe682722_s5.jpg?f=m",
    },
    {
      name: "ULLVIDE - Fitted sheet",
      id: 26,
      section: "Bedroom",
      coordinates: {},
      price: "15",
      description: "White",
      subsection: 19,
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
  const [showLoader, setShowLoader] = useState();
  let counter = 0;

  let anotherlist = [];
  const getIt = async (name, id, len) => {
    await axios
      .get(SPECIFIC_PRODUCT_URL + `/${name}/${id}`, { mode: "no-cors" })
      .then((res) => {
        if (anotherlist.length < len) {
          anotherlist.push(res.data);
          // createItems(anotherlist);
          counter++;
          if (counter===len) {
            createItems(anotherlist, false);
          }else{
            createItems(anotherlist, true);
          }
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
  const createItems = (data, loadingPage) => {
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
    data.forEach((obj) => {
      if (obj.section === "Dining room") {
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
          time={0}
          arrow="down-arrow.png"
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerB.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2
          ]}
          SSection = {'44'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Kitchen"} time={1} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerK.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'17'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Dining Room"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerDR.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'93'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Bathroom"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'75'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Home Decoration"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'6'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Lighting"} time={4} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
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
          time={0}
          arrow="up-arrow.png"
        />
        <SectionHeader
          expandCollapse={() => {
            setCollapse2(true);
            setNaming(ItemListTriggerDR[0].name);
          }}
          secName={"Kitchen"}
          time={0}
          arrow="down-arrow.png"
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerK.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'17'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Dining Room"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerDR.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'93'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Bathroom"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'75'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Home Decoration"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'6'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Lighting"} time={4} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
        />
      </div>
    );
    setShowLessItems2(
      <div>
        <SectionHeader arrow="up-arrow.png" secName={"Bedroom"} time={0} />
        <SectionHeader
          expandCollapse={() => {
            setCollapse2(false);
            setNaming(ItemListTriggerK[0].name);
          }}
          secName={"Kitchen"}
          time={0}
          arrow="up-arrow.png"
        />
        <SectionHeader
          secName={"Dining Room"}
          expandCollapse={() => {
            setCollapse3(true);
            setNaming(ItemListTriggerBT[0].name);
          }}
          time={1}
          arrow="down-arrow.png"
          
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerDR.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'93'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Bathroom"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'75'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Home Decoration"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'6'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Lighting"} time={3} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
        />
      </div>
    );
    setShowLessItems3(
      <div>
        <SectionHeader arrow="up-arrow.png" secName={"Bedroom"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Kitchen"} time={0} />
        <SectionHeader
          secName={"Dining Room"}
          expandCollapse={() => {
            setCollapse3(false);
            setNaming(ItemListTriggerDR[0].name);
          }}
          time={0}
          arrow="up-arrow.png"
        />
        <SectionHeader
          expandCollapse={() => {
            setCollapse4(true);
            setNaming(ItemListTriggerHD[0].name);
          }}
          arrow="down-arrow.png"
          secName={"Bathroom"}
          time={1}
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerBT.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'75'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Home Decoration"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'6'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Lighting"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
        />
      </div>
    );
    setShowLessItems4(
      <div>
        <SectionHeader arrow="up-arrow.png" secName={"Bedroom"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Kitchen"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Dining Room"} time={0} />
        <SectionHeader
          expandCollapse={() => {
            setCollapse4(false);
            setNaming(ItemListTriggerBT[0].name);
          }}
          secName={"Bathroom"}
          time={0}
          arrow="up-arrow.png"
        />
        <SectionHeader
          expandCollapse={() => {
            setCollapse5(true);
            setNaming(ItemListTriggerL[0].name);
          }}
          secName={"Home Decoration"}
          time={1}
          arrow="down-arrow.png"
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerHD.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'6'}
        />
        <SectionHeader arrow="down-arrow.png" secName={"Lighting"} time={2} />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
        />
      </div>
    );
    setShowLessItems5(
      <div>
        <SectionHeader arrow="up-arrow.png" secName={"Bedroom"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Kitchen"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Dining Room"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Bathroom"} time={0} />
        <SectionHeader
          expandCollapse={() => {
            setCollapse5(false);
            setNaming(ItemListTriggerHD[0].name);
          }}
          secName={"Home Decoration"}
          time={0}
          arrow="up-arrow.png"
        />
        <SectionHeader
          expandCollapse={() => {
            setCollapse6(true);
            setNaming(
              "All items collected - No more items stored in the basket "
            );
          }}
          secName={"Lighting"}
          time={1}
          arrow="down-arrow.png"
        />
        <Section_Item
          ItemListing={[
            [
              ...new Map(
                ItemListTriggerL.map((item) => [item["id"], item])
              ).values(),
            ],
            itemListTriggerDR2,
          ]}
          SSection = {'37'}
          arrow="up-arrow.png"
        />
      </div>
    );
    setShowLessItems6(
      <div>
        <SectionHeader arrow="up-arrow.png" secName={"Bedroom"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Kitchen"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Dining Room"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Bathroom"} time={0} />
        <SectionHeader arrow="up-arrow.png" secName={"Home Decoration"} time={0} />

        <SectionHeader
          expandCollapse={() => {
            setCollapse6(false);
            setNaming(ItemListTriggerL[0].name);
          }}
          secName={"Lighting"}
          time={0}
          arrow="up-arrow.png"
        />
      </div>
    );
  };

  //Differentiate within Sections

  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);
  const [collapse6, setCollapse6] = useState(false);
  const [showLessItems, setShowLessItems] = useState();
  const [showLessItems2, setShowLessItems2] = useState();
  const [showLessItems3, setShowLessItems3] = useState();
  const [showLessItems4, setShowLessItems4] = useState();
  const [showLessItems5, setShowLessItems5] = useState();
  const [showLessItems6, setShowLessItems6] = useState();
  const [naming, setNaming] = useState("");
  const testData1 = [{ bgcolor: "#21579D", completed: 0 }];
  const testData2 = [{ bgcolor: "#21579D", completed: 17 }];
  const testData3 = [{ bgcolor: "#21579D", completed: 34 }];
  const testData4 = [{ bgcolor: "#21579D", completed: 50 }];
  const testData5 = [{ bgcolor: "#21579D", completed: 67 }];
  const testData6 = [{ bgcolor: "#21579D", completed: 83 }];
  const testData7 = [{ bgcolor: "#21579D", completed: 100 }];

  //GENERAL LAYOUT -----------------------------------------------------------------

  if (
    !collapse &&
    !collapse2 &&
    !collapse3 &&
    !collapse4 &&
    !collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>

        <div className="align-items-center">
          {testData1.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
        {showLoader}
        {showItems}
      </Container>
    );
  } else if (
    collapse &&
    !collapse2 &&
    !collapse3 &&
    !collapse4 &&
    !collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          <div className="align-items-center">
            {testData2.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems}</Row>
      </Container>
    );
  } else if (
    collapse &&
    collapse2 &&
    !collapse3 &&
    !collapse4 &&
    !collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          {" "}
          <div className="align-items-center">
            {testData3.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems2}</Row>
      </Container>
    );
  } else if (
    collapse &&
    collapse2 &&
    collapse3 &&
    !collapse4 &&
    !collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          {" "}
          <div className="align-items-center">
            {testData4.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems3}</Row>
      </Container>
    );
  } else if (
    collapse &&
    collapse2 &&
    collapse3 &&
    collapse4 &&
    !collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          {" "}
          <div className="align-items-center">
            {testData5.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems4}</Row>
      </Container>
    );
  } else if (
    collapse &&
    collapse2 &&
    collapse3 &&
    collapse4 &&
    collapse5 &&
    !collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          {" "}
          <div className="align-items-center">
            {testData6.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems5}</Row>
      </Container>
    );
  } else if (
    collapse &&
    collapse2 &&
    collapse3 &&
    collapse4 &&
    collapse5 &&
    collapse6
  ) {
    return (
      <Container className="mt-4">
        <Row>
          <div className="col-7">
            <p>Next on your shopping list:</p>
          </div>
          <div className="col-5">
            <p>
              <b>{naming.split(" - ")[0]}</b>
            </p>
          </div>
        </Row>
        <Row>
          {" "}
          <div className="align-items-center">
            {testData7.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Row>
        <Row>{showLessItems6}</Row>
      </Container>
    );
  }
}

export default Cart;
