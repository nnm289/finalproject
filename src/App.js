import "./App.css";
import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import Home from "./views/index";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Favorites from "./views/favorites";
import Detail from "./views/detail";



function App() {
  return (
    <div className="website">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />}>
          <Route path = ":productId" element={<Detail></Detail>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
