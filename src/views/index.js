import React from "react";
import Header from "../components/Header";
import VideoBackground from "../components/VideoBackground";
import Popular from "../components/Popular";
import Collections from "../components/Collections";
import Offer from "../components/Offers";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header/>
      <VideoBackground/>
      <Collections />
      <Popular />
      <Offer />
      <Footer />
    </div>
  );
}
export default Home;
