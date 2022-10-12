import "./App.css";
import Cart from "./components/Cart";
import React, { useState } from "react";

function App() {
  const ItemList = [
    { name: "Cool Knife", section: 4, price: 35, number: 1, coordinates: {x:50, y:30} },
    { name: "Lamp", section: 3, price: 27, number: 1, coordinates: {x:70, y:90} },
    { name: "Table", section: 1, price: 55, number: 2, coordinates: {x:60, y:76} },
    { name: "Sofa", section: 4, price: 40, number: 1, coordinates: {x:78, y:20} },
  ];

  const [items,setItems] = useState(ItemList);

  return (
    <div className="App">
      <Cart item={items} />
    </div>
  );
}

export default App;
