import React from "react";
import "./item.css";

const Item = (props)=>{
  return (
    <div className="Item">
      <img src={props.image} alt="" className="shoes-img"></img>
      <h3>{props.name}</h3>

      <div className="item-prices">{"$" + props.price}</div>
      

    </div>
  );
};
export default Item;

