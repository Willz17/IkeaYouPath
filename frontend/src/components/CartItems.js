import "./CartItems.css";
import "./Buttons.css";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import React, { useState } from "react";

function CartItems(props) {
  //Recommendations popouts
  const [recommendation1, setRecomendation1] = useState(false);
  const [recommendation2, setRecomendation2] = useState(false);
  const [recommendation3, setRecomendation3] = useState(false);

  const handleClick = () => {
    if (props.section === "Section 1") {
      if (recommendation1 === false) {
        setRecomendation1(true);
      } else {
        setRecomendation1(false);
      }
    } else if (props.section === "Section 2") {
      if (recommendation2 === false) {
        setRecomendation2(true);
      } else {
        setRecomendation2(false);
      }
    } else if (props.section === "Section 3") {
      if (recommendation3 === false) {
        setRecomendation3(true);
      } else {
        setRecomendation3(false);
      }
    }
  };

  // Display Layout
  if (!recommendation1 && !recommendation2 && !recommendation3) {
    return (
      <Container
        style={{ backgroundColor: "white" }}
        className="mx-2 square border border-1 rounded mb-0 w-100"
      >
        <Row className="align-items-center">
          <div class="col-4">
            <div>
              <img src={props.image}></img>
            </div>
          </div>

          <div class="col-3">
            <div className="p-3">
              <p>
                <b>{props.name}</b>
              </p>
            </div>
          </div>

          <div class="col-3">
            <p>{props.subSection}</p>
          </div>

          <div class="align-items-left col-2">
            <input class="checkbox1" type="checkbox" m onClick={handleClick} />
          </div>
        </Row>
      </Container>
    );
  } else if (recommendation1 || recommendation2 || recommendation3) {
    return (
      <Container
        style={{ backgroundColor: "white" }}
        className="mx-2 square border border-1 rounded mb-0 w-100"
      >
        <Row className="align-items-center">
          <div class="col-4">
            <div>
              <img src={props.image}></img>
            </div>
          </div>

          <div class="col-3">
            <div className="p-3">
              <p>
                <b>{props.name}</b>
              </p>
            </div>
          </div>

          <div class="col-3">
            <p>{props.subSection}</p>
          </div>

          <div class="align-items-left col-2">
            <input class="checkbox1" type="checkbox" m onClick={handleClick} />
          </div>
        </Row>

        <Row className="text-center">
          <div className="fs-6">Recommendations</div>
        </Row>
        <Row>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rounded">
                <b>{props.recName}</b>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">
                {props.subSection}
              </div>
            </Row>
          </div>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rounded">
                <b>{props.recName}</b>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">
                {props.subSection}
              </div>
            </Row>
          </div>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rounded">
                <b>{props.recName}</b>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">
                {props.subSection}
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}
export default CartItems;
