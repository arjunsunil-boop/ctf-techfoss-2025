import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="background">
        <video autoPlay loop muted className="background-video">
          <source src="/Mwone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;
