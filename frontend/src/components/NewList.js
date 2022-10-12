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
  const [result, setResults] = useState();
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

  const showItems = (event) => {
    console.log(searchTerm);
    //get data from API with searchTerm as input, productList = get(searchTerm)
    event.preventDefault();
    var itemName = [];
    var itemPrice = [];
    var itemSection = [];
    productList.forEach((obj) => {
      itemName.push(obj.name);
      itemPrice.push(obj.price);
      itemSection.push(obj.section);
    });
    let solution;
    solution = itemName.map((item, index) => (
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
              {itemName[index]} <p>{"Price: " + itemPrice[index]}</p>{" "}
              <p>{"Section: " + itemSection[index]}</p>
            </div>

            <div className="col-md-2">
              <Button className="pull-right" variant="primary">
                Add to Shoppinglist
              </Button>{" "}
            </div>
          </Row>
        </Card>
      ))
    setResults(solution);
  };
  return (
    <div>
      <Row className="align-items-center">
        {/* <input
          className="form-control "
          type="text"
          placeholder="Search for Item..."
          value={searchTerm}
          onChange={handleChange}
        /> */}
        <Container>
          <div>
          <form onSubmit={showItems} class="input-group mb-3 mt-5 w-75 center">
            <input
              type="text"
              className ="form-control"
              placeholder="Search for Item..."
              onChange={event => setSearchTerm(event.target.value)}
              value={searchTerm}
            />
            <div class="input-group-append">
              <Button
                className ="btn btn-outline"
                type="submit"
              >
                Search
              </Button>
            </div>
            </form>
          </div>
        </Container>
      </Row>
      
      {result}
      {/* {searchResults.map((item, index) => (
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
                Add to Shoppinglist
              </Button>{" "}
            </div>
          </Row>
        </Card>
      ))} */}
    </div>
  );
};

export default NewList;
