import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartBtn = () => {
  //we  get a state  of handle Cart

  // we write reducer file on call the state --> state => state.handleCart {handleCart is file }
  
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>Cart({state.length})
      </NavLink>
    </div>
  );
};

export default CartBtn;
