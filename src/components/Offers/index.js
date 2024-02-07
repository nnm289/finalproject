import React from "react";
import "./offer.css";
import data_product from "../Images/data";
import Item from "../Item";

const Offer = () => {
  return (
    <div className="offer">
      <h1>EXCLUSIVE OFFERS</h1>
      <hr />
      <div className="offer-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              sale_price={item.sale_price}

            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
