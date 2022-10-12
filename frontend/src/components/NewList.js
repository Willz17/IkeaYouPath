import React, { useState } from "react";

import "./NewList.css";
// import Card from "./Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

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
      <Row className="align-items-center">
        <input
          className="form-control p-2"
          type="text"
          placeholder="Search for Item..."
          value={searchTerm}
          onChange={handleChange}
        />
      </Row>

      {searchResults.map((item, index) => (
        <Card className="p-2" bg="light" style={{ width: "auto" }}>
          <Row className="align-items-center">
            <div className="col-md-3">
              <img
                src="https://media.istockphoto.com/photos/chefs-kitchen-knife-picture-id1092668906?k=20&m=1092668906&s=612x612&w=0&h=IzaoUoNJXe8P7FkB4MFKO09r0FVMlXvjfdabFmegCkI="
                alt="..."
                class="img-thumbnail"
              ></img>
            </div>
            <div className="col-md-7">
              {item} <p>{"Price: " + itemPrice[index]}</p>{" "}
              <p>{"Section: " + itemSection[index]}</p>
            </div>

            <div className="col-md-2">
              <Button className="pull-right" variant="primary">
                Add to Cart
              </Button>{" "}
            </div>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default NewList;
