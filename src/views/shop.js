import React from "react";
import { useState } from "react";
import {Outlet} from "react-router-dom"
import products from "../components/Images/all_product";
import Header from "../components/Header";
import Products from "../components/Products";
import Search from "../components/Sidebar/Search";
import Sidebar from "../components/Sidebar";
import Card from "../components/Others/card";
import "./shop.css";
import Footer from "../components/Footer";
function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, name, type }) =>
          category === selected || name === selected || type === selected
      );
    }

    return filteredProducts.map(({ image, name, price, id }) => (
      <Card key={Math.random()} image={image} name={name} price={price} id={id}/>
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Header></Header>
      <Sidebar handleChange={handleChange} />
      <Search query={query} handleInputChange={handleInputChange}></Search>
      <Products result={result} />
<Footer></Footer>
<Outlet></Outlet>
    </div>
  );
}
export default Shop;
