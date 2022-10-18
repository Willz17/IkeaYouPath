import "./Cart.css";
import "./Buttons.css";
import CartItems from "./CartItems.js";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";

function Cart(props) {
  // Item Creation
  const ItemList = [
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
      section: "Section 2",
      subSection: "Shelf 12",
      price: "35",
      coordinates: { x: 70, y: 90 },
      image:
        "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_498x498-ID1244137-f93b03546b4a9f1dc8091c19adbab9ad.jpg",
    },
    {
      name: "Table",
      section: "Section 3",
      subSection: "Shelf 98",
      price: "60",
      coordinates: { x: 60, y: 76 },
      image:
        "https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-boeg-190x95-cm-side.png?aspect=16:9&device=desktop&size=medium&display=standard",
    },
    {
      name: "Sofa",
      section: "Section 1",
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
  console.log(ItemListTriggerSection2);

  //Recommendations popouts
  //Recommendation Section 1
  const [recommendation1, setRecomendation1] = useState(false);
  const handleClickS1 = () => {
    setRecomendation1(true);
  };
  //Recommendation Section 2
  const [recommendation2, setRecomendation2] = useState(false);
  const handleClickS2 = () => {
    setRecomendation2(true);
  };
  //Recommendation Section 3
  const [recommendation3, setRecomendation3] = useState(false);
  const handleClickS3 = () => {
    setRecomendation3(true);
  };

  //GENERAL LAYOUT
  if (!recommendation1 && !recommendation2 && !recommendation3) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 mt-3 p-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-6">Section 1</div>
              <div className="fs-6 col-6">Current Section</div>
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
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS2}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS3}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
        </Row>
      </Container>
    );
    {
      /*RECOMMENDATIONS POP-UP S1*/
    }
    {
      /*RECOMMENDATIONS POP-UP S1*/
    }
  } else if (recommendation1) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 mt-3 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-6">Section 1</div>
              <div className="fs-6 col-6">Current Section</div>
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
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "Bisque" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6">Recommendations</div>
            </Row>
            <Row>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
            </Row>
          </Container>
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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>

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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
        </Row>
      </Container>
    );
    {
      /*RECOMMENDATIONS POP-UP S2*/
    }
    {
      /*RECOMMENDATIONS POP-UP S2*/
    }
  } else if (recommendation2) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 mt-3 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-6">Section 1</div>
              <div className="fs-6 col-6">Current Section</div>
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
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}

          <Container
            style={{ backgroundColor: "Bisque" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6">Recommendations</div>
            </Row>
            <Row>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
            </Row>
          </Container>

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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
        </Row>
        {/*RECOMMENDATIONS POP-UP S3*/}
        {/*RECOMMENDATIONS POP-UP S3*/}
      </Container>
    );
  } else if (recommendation3) {
    return (
      <Container>
        <Row>
          <h2>Shopping List</h2>
        </Row>

        <Row>
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 mt-3 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6 col-6">Section 1</div>
              <div className="fs-6 col-6">Current Section</div>
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
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>
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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}
          <Container
            style={{ backgroundColor: "FloralWhite" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row>
              <div class="col-4"></div>
              <div class="col-6">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "Bisque",
                    color: "black",
                    borderColor: "black",
                  }}
                  onClick={handleClickS1}
                >
                  <b>I feel inspired</b>
                </Button>
              </div>
              <div class="col-2"></div>
            </Row>
          </Container>

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
              subSection={obj.subSection}
              price={obj.price}
              coordinates={obj.coordinates}
              number={obj.number}
              image={obj.image}
              length={ItemListTriggerSection1.length}
            />
          ))}

          <Container
            style={{ backgroundColor: "Bisque" }}
            className="mx-2 square border border-1 rounded mb-0 w-100"
          >
            <Row className="text-center">
              <div className="fs-6">Recommendations</div>
            </Row>
            <Row>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
              <div class="col-4">
                <Row>
                  <div>
                    <img
                      className="img-sizing"
                      src={ItemListTriggerSection2[0].image}
                    ></img>
                  </div>
                </Row>
                <Row>
                  <div>{ItemListTriggerSection2[0].name}</div>
                </Row>
                <Row>
                  <button className="add-to-cart mx-2 p-1">Add to Cart</button>
                </Row>
              </div>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Cart;
