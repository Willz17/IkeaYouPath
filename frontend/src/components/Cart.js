import "./Cart.css";
import CartItems from "./CartItems.js";
import React, { useState } from "react";
import "./Buttons.css";

function Cart(props) {
  const [itemObject, setItemObject] = useState("");
  let FinalPrice = 0;
  let ActualPrice;
  //console.log(ActualPrice)
  //FinalPrice = (FinalPrice + ActualPrice);
  return (
    <div>
      <div>
        <h1>CART</h1>
      </div>
      <div className="ListText">
        {props.items.map((listItem) => (
          <CartItems
            name={listItem.name}
            section={listItem.section}
            price={listItem.price}
            coordinates={listItem.coordinates}
            number={listItem.number}
          />
        ))}
        <br></br>
        Final Price: <label>{FinalPrice}</label>
        <br></br>
        <button className="SubmitButton">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
