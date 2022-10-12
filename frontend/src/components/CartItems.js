import "./CartItems.css";
import React, { useState } from "react";

function CartItems(props) {
  const [addNumber, setAddNumber] = useState("");
  const [decreaseNumber, setDecreaseNumber] = useState("");
  let FinalPrice = 0;
  const AddNumberHandler = (event) => {
    setAddNumber(event.target.value);
  };

  const DecreaseNumberHandler = (event) => {
    setDecreaseNumber(event.target.value);
  };

  return (
    <div>
      <div class="container">
        <div>
          <div>
            <div>
              <div class="filter-result">
                <div class="job-box mb-30">
                  <div>
                    <div class="job-content">
                      <span>
                        {props.name}&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>
                          Section:&nbsp;{props.section}&nbsp;|&nbsp;Price:&nbsp;
                          {props.price}
                        </b>
                      </span>
                      <h4>
                        Number of items: {props.number}&nbsp;
                        
                        <button className="SmallButtons" type="button" onChange={AddNumberHandler}>
                          +
                        </button>
                        <button className="SmallButtons" type="button" onChange={DecreaseNumberHandler}>
                          -
                        </button>
                      </h4>
                      <button className="RemoveForever" type="button">
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
