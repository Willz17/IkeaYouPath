import "./App.css";
import Cart from "./components/Cart";
import React, { useState } from "react";

import NewList from "./components/NewList"

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Settings from "./components/Settings";

const App = () => {
  const ItemList = [
    { name: "Cool Knife", section: 4, price: 35, number: 1, coordinates: {x:50, y:30} },
    { name: "Lamp", section: 3, price: 27, number: 1, coordinates: {x:70, y:90} },
    { name: "Table", section: 1, price: 55, number: 2, coordinates: {x:60, y:76} },
    { name: "Sofa", section: 4, price: 40, number: 1, coordinates: {x:78, y:20} },
  ];
  
   const [items,setItems] = useState(ItemList);
  
  return (
  <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/account' element={<Account />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
    <Cart item={items} />
    <br><br>
    <NewList />
    </div>
  );
};

export default App;
