import React from "react";
import "./background.css";
import basketballVideo from "../Images/basketballVideo.mp4";

const VideoBackground = () => {
  return (
    <div className="main">
      <div className="overlay">
        <div className="content">
          <h1 className="title">BASKETBALL</h1>
          <h2>It is more than just a sport</h2>
          <h2>It is a way of living</h2>
        </div>
      </div>
      <video src={basketballVideo} autoPlay loop muted />
{/* <img src={brands} alt="" className="brand-banner"></img> */}
    </div>
  );
};
export default VideoBackground;
