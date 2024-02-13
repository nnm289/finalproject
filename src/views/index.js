import React from "react";
import Header from "../components/Header";
import VideoBackground from "../components/VideoBackground";

import Collections from "../components/Collections";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header/>
      <VideoBackground/>
      <Collections />


      <Footer />
    </div>
  );
}
export default Home;
