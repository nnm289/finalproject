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
        <div className="NavLogo NavItem">
          <FontAwesomeIcon icon={faDribbble} className="logo" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/"  className="NavItem">
              Home
            </Link>
          </li>

          <li>
            <Link to="/men"  className="NavItem" >
              Men
            </Link>
          </li>
          <li>
            <Link to="/women"  className="NavItem">
              Women
            </Link>
          </li>
          <li>
            <Link to="/about"  className="NavItem">
              About
            </Link>
          </li>
        </ul>
        {/* <Link to ="/about">about</Link> */}

        <div className="nav-fav-cart">
          <div className="NavItem cart">
            <Link to="/cart"  className="cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
          <div className="NavItem heart">
            <Link to="/favorites"  className="heart">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
export default Header;
