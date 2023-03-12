import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "../Screens/Dashboard/Dashboard";
import MyBuys from "../Screens/MyBuys/MyBuys";
import MySell from "../Screens/Mysells/MySell";
import Cart from "../Screens/Cart/Cart"
// import Dashboard from "../Screens/Dashboard/Dashboard";

import BuyInformation from "../Component/BuyInformation/BuyInformation";
// import Register from "../Component/Signup/Register";
import Login from "../Component/Login/Login";
import Register from "../Component/Signup/Register";
import AddBooks from "../Component/AddBooks/AddBooks";
import BookDetails from "../Component/BookDetails/BookDetails";
import BuyBookDetail from "../Component/BuyBookDetail/BuyBookDetail";
import CartDetails from "../Component/CartDetails/CartDetails"

import PhoneSignUp from "../Component/PhoneSignup/PhoneSignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MyBuys />} />
        <Route path="/mybuy" exact element={<Dashboard/>} />
        <Route path="/mysell" exact element={<MySell />} />
        <Route path="/buyinformation" exact element={<BuyInformation />} />
        <Route path="/signup" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/addbooks" exact element={<AddBooks />} />
        <Route path="/bookdetails/:_id" exact element={<BookDetails />} />
        <Route path="/buybookdetails/:_id" exact element={<BuyBookDetail />} />
        <Route path="/cartdetails/:_id" exact element={<CartDetails />} />

        <Route path="/mycart" exact element={<Cart />} />
        {/* phone */}
        <Route path="/phonesignup" element={<PhoneSignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
