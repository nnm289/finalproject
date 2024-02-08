import React, { useContext } from 'react'
import "./category.css"
import ShopContext from "../contexts/ShopContext"
import Header from '../components/Header'
import dropdown_icon from '../components/Images/dropdown_icon.png'
import Item from '../components/Item'

const Category = (props) => {
const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <Header />
      <h1>{props.category}</h1>
      <div className="index-sort">
        <p>
          <span>Showing 1-15</span> out of 30 products
        </p>
        <div className="category-sort">
          SORT BY <img src={dropdown_icon} alt=""></img>
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              ></Item>
            );
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Category