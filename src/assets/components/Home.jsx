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
        <div className="nes-container with-title is-centered welcome-container">
          <p className="title">Welcome to TechFoss'25 CTF</p>
          <br />
          <p>
            The ultimate battleground for tech enthusiasts! Hosted as part of
            TechFoss 2025, our Capture The Flag (CTF) challenge is designed to
            push your skills to the limit, testing your knowledge in
            cryptography, reverse engineering, web security and more.
          </p>
          <p>
            Whether you're a beginner eager to learn or a seasoned techie' ready
            to dominate the leaderboard, Our CTF challenges you to showcase your
            problem-solving abilities in a high-energy, competitive setting.
            Join forces with fellow students, crack complex challenges, and
            prove your mettle in one of the most exhilarating tech events of the
            year!
          </p>
          <p>Are you ready to capture the flag? The challenge awaits!</p>
          <section>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() =>
                document.getElementById("dialog-default").showModal()
              }
            >
              Open dialog
            </button>
            <dialog className="nes-dialog" id="dialog-default">
              <form method="dialog">
                <p className="title">Dialog</p>
                <p>Do you want to Continue?</p>
                <menu className="dialog-menu">
                  <button className="nes-btn">Cancel</button>
                  <a href="/tasks" className="nes-btn is-primary">
                    Start
                  </a>
                </menu>
              </form>
            </dialog>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
