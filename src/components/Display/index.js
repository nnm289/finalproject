import React from "react";
import "./display.css";
import star_icon from "../Images/star_icon.png"
import star_dull_icon from "../Images/star_dull_icon.png"
const Display = (props) => {
  const { product } = props;
  return (
    <div className="display">
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
        </div>
      </div>
      <div className="main">

        <img src={product.image} alt="" className="main-img"></img>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="ratings">
            <img src></img>
        </div>
      </div>
    </div>
  );
};

export default Display;
