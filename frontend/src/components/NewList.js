import React, { useState } from "react";

import "./NewList.css"
import Card from "./Card";
const Products = {
    Knives: {
        name1: "First Knife",
        name2: "Second Knife",
        name3: "Third Knife",
    },
    Beds: {
        name1: "First Bed",
        name2: "Second Bed",
        name3: "Third Bed",
    }
};

// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin",
// ];

const NewList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const theProductOfInterest = Products.Knives;
  React.useEffect(() => {
    const results = Object.values(theProductOfInterest).filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input className="search_form"
        type="text"
        placeholder="Search for Item..."
        value={searchTerm}
        onChange={handleChange}
      />
      
        {searchResults.map((item) => (
          <Card><li className="each_item">
            {item} 
          </li>
          <button type="submit" className="add_to_cart">Add to cart</button>
          </Card>
        ))}
    </div>
  );
};

export default NewList;

