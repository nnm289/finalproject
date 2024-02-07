import React from "react";
import "./background.css";
import { NavLink as Link } from "react-router-dom";
import basketballVideo from "../Images/basketballVideo.mp4";
// import brands from "../Images/brands.png"
const VideoBackground = () => {
  return (
    <div className="main">
      <div className="overlay">
        <div className="content">
          <h1 className="title">BASKETBALL</h1>
          <h2>It is more than just a sport</h2>
          <h2>It is a way of living</h2>
          <Link to="/about" className={"shop-btn"}>
            <button className="btn">Find out more</button>
          </Link>
        </div>
      </div>
      <video src={basketballVideo} autoPlay loop muted />
{/* <img src={brands} alt="" className="brand-banner"></img> */}
    </div>
  );
};
export default VideoBackground;
