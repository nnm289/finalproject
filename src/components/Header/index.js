import React from "react";
import "./header.css";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {

  return (
    <Navbar fixed="top">
      <div className="NavBar">
        <div className="NavLogo">
          <FontAwesomeIcon icon={faDribbble} className="logo" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/" className="NavItem">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="NavItem">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/about" className="NavItem">
              About
            </Link>
          </li>
        </ul>

        <div className="nav-fav-cart">
          <div className="cart">
            <Link to="/cart" className="cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <div className="count">0</div>
          </div>

          <div className="heart">


          </div>
        </div>
      </div>
    </Navbar>
  );
};
export default Header;
