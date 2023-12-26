import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
//import Login from"..pages//Lognin";

export const Navbar = () => {
  return (
    <>
    {/* <div className="header">
    <h1 ><span style={{color: "red"}}>Buy </span>the <span style={{color: "blue"}}> Product </span> for You!</h1>
    <h1 ><span style={{color: "red"}}>Sell </span>Your<span style={{color: "blue"}}> Product! </span></h1>
    </div> */}
    <h1 style={{color: "orange"}}>Buy Sell Shopee!</h1>
    <div className="navbar">
   
      <div className="links">
      <Link to="/Login"> Login </Link>
      <Link to="/Reigister"> Register </Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
    </>
  );
};
