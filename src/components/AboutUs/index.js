import React from 'react'
import "./about.css"
import collection1 from "../Images/collection1.png"
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="block block1">
        <div>
          <h1>ABOUT US</h1>
          <p>
            Founded in Hanoi, we are the leading footwear and apparel
            retailer that unlocks the “inner sneakerhead” in all of us. With
            multiple retail stores in across Vietnamese regions we have a strong
            history of sneaker authority that sparks discovery and ignites the
            power of sneaker culture.
          </p>
          <img src={collection1} alt=""></img>
        </div>
      </div>
      <div className='block block2'> 

      </div>
    </div>
  );
}

export default AboutUs