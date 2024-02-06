import React from "react";
import "./background.css"
import basketballVideo from"../Images/basketballVideo.mp4"
const VideoBackground = () => {
return (
  <div className="main">
    <div className="overlay">
      <div className="content">
        <h1>Lets go shopping</h1>
        <h2>It is more than just basketball</h2>
        <h2>It is a way of living</h2>
        <button className="shop-btn">Find out more</button>
      </div>
    </div>
    <video src={basketballVideo} autoPlay loop muted />
  </div>
);
}
export default VideoBackground