import "./CartItems.css";
import "./Buttons.css";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import React, { useState } from "react";

function CartItems(props) {
  //Recommendations popouts
  const [recommendation, setRecomendation] = useState(false);

  const handleClick = () => {
    if (recommendation === false) {
      setRecomendation(true);
    } else {
      setRecomendation(false);
    }
  };
  
  // Display Layout
  if (!recommendation) {
    return (
      <Container
        style={{ backgroundColor: "white" }}
        className="mx-3 p-1 square"
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
            <input class="checkbox1" type="checkbox" onClick={handleClick} />
          </div>
        </Row>
      </Container>
    );
  } else if (recommendation) {
    return (
      <Container
        style={{ backgroundColor: "white" }}
        className="mx-3 p-1 square "
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
            <p>Shelf 44</p>
          </div>

          <div class="align-items-left col-2">
            <input class="checkbox1" type="checkbox" onClick={handleClick} />
          </div>
        </Row>

        <Row className="">
          <div className="fs-6 mb-2"><b>You might also like:</b></div>
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
              Shelf 44
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
              Shelf 44
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
              Shelf 44
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}
export default CartItems;
