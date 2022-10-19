import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getFromLocale } from "../utils/storage";

const NavBar = () => {
  let loggedIn;

  if (getFromLocale("cred")) {
    loggedIn = "yellow";
    console.log("signed in");
  } else loggedIn = "transparent";
  console.log("loaded", loggedIn);

  return (
    <Navbar
      className="navbar-static-top justify-content-between px-3 py-2"
      bg="light"
    >
      <Navbar.Brand href="/search">
        <img src="logoIKEA.png" alt="ikea_logo" style={{ width: "7rem" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav>
        <Nav.Link href="/search">
          <img src="search.png" alt="search" style={{ width: "1.4rem" }}></img>
        </Nav.Link>
        {/* <Nav.Link href='/shoppinglist'>Shopping List</Nav.Link> */}
        <Nav.Link href="/cart">
          <img src="basket.png" alt="basket" style={{ width: "1.4rem" }}></img>
        </Nav.Link>
        <Nav.Link href="/account">
          <img
            src="account.png"
            alt="account"
            style={{
              width: "1.4rem",
              backgroundColor: loggedIn,
              borderRadius: 20,
            }}
          ></img>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
