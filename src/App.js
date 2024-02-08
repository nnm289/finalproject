import "./App.css";
import React from "react";
// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/index";
import Category from "./views/category";
import Product from "./views/product";
import About from "./views/about";
import Cart from "./views/cart";
import Favorites from "./views/favorites";

function App() {
  return (
    <div className="website">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/men" element={<Category category="men" />} />
        <Route path="/women" element={<Category category="women" />} />
        <Route path="/about" element={<About />} />
        <Route path="/produc" element={<Product />}>
          <Route path=":productID" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
