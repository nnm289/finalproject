import React from "react";
import "./collections.css";
import collection1 from "../Images/collection1.png"
import collection2 from "../Images/collection2.png"
import kt8 from "../Images/kt8.png"

const Collections = () => {
  return (
    <div className="collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collection2">
        <img src={collection2} alt="" className="collection-img2"></img>
        <div className="text ">
          {" "}
          <p>28.09.2023</p>
          <p className="italic">AN EXCLUSIVE LOOK AT</p>
          <p className="italic">THE KT8 LIMITED EDITION</p>
          <img src={kt8} alt="" className="kt8"></img>
        </div>
      </div>
      <div className=" collection1">
        <img src={collection1} alt=""></img>
        <div className="text">
          <p>30.11.2023</p>
          <h1>THE FUTURE OF CURRY STARTS NOW</h1>
          <p>Stephen Curry and Curry Brand, powered by Under Armour,</p>
          <p>
            release the 11th edition of Stephen’s signature shoe line in
            celebration of the Future of Curry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
