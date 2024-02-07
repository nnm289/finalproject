import React from 'react'
import "./popular.css"
import data_product from '../Images/data'
import Item from '../Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>OUR BEST SELLERS</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}

                  ></Item>
                );
            })}
        </div>
    </div>
  )
}

export default Popular