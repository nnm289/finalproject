import "./App.css";
import React from "react";
// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views";
import Men from "./views";
import Women from "./views";
import About from "./views";
import Cart from "./views"
import Favorites from "./views";


function App() {
  return (
    <div>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
   
</div>

  );
}

export default App;
