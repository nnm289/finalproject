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
function Shop(cart,setCart) {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;


    if (query) {
      filteredProducts = filteredItems;
    }

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
const addToCart = (product) => {
  let newCart = [...cart];
  let itemInCart = newCart.find((item) => product.name === item.name);
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    itemInCart = {
      ...product,
      quantity: 1,
    };
    newCart.push(itemInCart);
  }
  setCart(newCart);
};



  return (
    <div>
      <Header></Header>
      <Sidebar handleChange={handleChange} />
      <Search query={query} handleInputChange={handleInputChange}></Search>
      <Products result={result} />
<Footer></Footer>

    </div>
  );
}
export default Shop;
