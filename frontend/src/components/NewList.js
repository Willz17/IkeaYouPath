import React, { useState } from "react";

import "./NewList.css";
import Card from "./Card";

const productList = [
  {
    name: "First knife",
    price: "20€",
    section: "Kitchen",
    coordinates: { x: 50, y: 20 },
  },
  {
    name: "Second knife",
    price: "15€",
    section: "Knives",
    coordinates: { x: 50, y: 20 },
  },
  {
    name: "Third knife",
    price: "30€",
    section: "Knives",
    coordinates: { x: 50, y: 20 },
  },
];

const NewList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  var itemName = [];
  var itemPrice = [];
  var itemSection = [];
  productList.forEach((obj) => {
    itemName.push(obj.name);
    itemPrice.push(obj.price);
    itemSection.push(obj.section);
  });

  React.useEffect(() => {
    const results = itemName.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        className="search_form"
        type="text"
        placeholder="Search for Item..."
        value={searchTerm}
        onChange={handleChange}
      />

      {searchResults.map((item, index) => (
        <Card>
          <li className="each_item">
            {item} <p className="price_tag">{"Price: " + itemPrice[index]}</p>{" "}
            <p className="section_tag">{"Section: " + itemSection[index]}</p>
          </li>
          <p>
            <button type="submit" className="add_to_cart">
              Add to cart
            </button>
          </p>
        </Card>
      ))}
    </div>
  );
};

export default NewList;
