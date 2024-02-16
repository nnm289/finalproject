import React from "react";
import "./collections.css";
import collection1 from "../Images/collection1.png"
import collection2 from "../Images/collection2.png"
import collection3 from "../Images/collection3.webp"
import collection4 from "../Images/collection4.webp"
import collection5 from "../Images/collection5.png"
import collection6 from "../Images/collection6.jpg"
import collection7 from "../Images/collection7.png"

const Collections = () => {
  return (
    <div className="collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="grid">
        <img src={collection2} className="item2" alt=""></img>

        <img src={collection4} className="item4" alt=""></img>

        <img src={collection7} className="item7" alt=""></img>
        <img src={collection3} className="item3" alt=""></img>
        <img src={collection6} className="item6" alt=""></img>

        <img src={collection1} className="item1" alt=""></img>

        <img src={collection5} className="item5" alt=""></img>
      </div>
    </div>
  );
};

export default Collections;

