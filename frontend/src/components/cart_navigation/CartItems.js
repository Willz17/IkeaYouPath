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

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  // console.log(props.image[0])
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

          <div class="col-4">
            <div className="p-3 rec-text-size">
              <p>
                <Row><b>{props.name.split(' - ')[0]}</b></Row>
                <Row><p>{props.name.split(' - ')[1]}</p></Row>
              </p>
            </div>
          </div>

          <div class="col-2">
            <p>Shelf {getRandomInt(1,100)}</p>
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

          <div class="col-4">
            <div className="rec-text-size p-3">
              <p>
              <Row><b>{props.name.split(' - ')[0]}</b></Row>
                <Row><p>{props.name.split(' - ')[1]}</p></Row>
              </p>
            </div>
          </div>

          <div class="col-2">
            <p>Shelf {getRandomInt(1,100)}</p>
          </div>

          <div class="align-items-left col-2">
            <input class="checkbox1" type="checkbox" onClick={handleClick} />
          </div>
        </Row>

        <Row className="">
          <div className="fs-6 mb-2">
            <b>You might also like:</b>
          </div>
        </Row>
        <Row>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage0}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rec-text-size rounded">
                <Row><b>{props.recName0.split(' - ')[0]}</b></Row>
                <Row><p>{props.recName0.split(' - ')[1]}</p></Row>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">Shelf {getRandomInt(1,100)}</div>
            </Row>
          </div>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage1}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rec-text-size rounded">
                <Row><b>{props.recName1.split(' - ')[0]}</b></Row>
                <Row><p>{props.recName1.split(' - ')[1]}</p></Row>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">Shelf {getRandomInt(1,100)}</div>
            </Row>
          </div>
          <div class="col-4">
            <Row>
              <div>
                <img className="img-sizing" src={props.recImage2}></img>
              </div>
            </Row>
            <Row>
              <div className="recom-divs rec-text-size rounded">
                <Row><b>{props.recName2.split(' - ')[0]}</b></Row>
                <Row><p>{props.recName2.split(' - ')[1]}</p></Row>
              </div>
            </Row>
            <Row>
              <div className="recom-divs-subsection rounded">Shelf {getRandomInt(1,100)}</div>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}
export default CartItems;
