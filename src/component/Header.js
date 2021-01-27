import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

function Header() {
  const [menu, SetMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    SetMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <li>
          <i className="fas fa-bars"></i>
        </li>
      </div>
      <div className="logo">
        <h1>
          <Link to="/">
            <i style={{ marginRight: "5px" }} className="fab fa-shopify"></i>WEE
            SHOP
          </Link>
        </h1>
      </div>
      <ul style={styleMenu} className="all-menu" onClick={toggleMenu}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login 🕸 Registration</Link>
        </li>
        <li onClick={toggleMenu}>
          <i className="fas fa-times menu"></i>
        </li>
      </ul>
      <div className="cart-icon">
        <span> {cart.length} </span>
        <Link to="/cart">
          <i className="fas fa-shopping-cart cart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
