import "./App.css";

import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Settings from "./components/Settings";
import Cart from "./components/Cart";
import NewList from "./components/NewList";
import Home from "./components/Home";

const App = () => {  
  return (
  <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
       < Route path='/shoppinglist' element={<Cart />}/>
       <Route path='/search' element={<NewList />}/>
      </Routes>
    </Router>
  
    </div>
  );
};

export default App;
