import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Load from "./Load";

const Home = () => {
  const [loading, setLoading] = useState(false); // Controls loading state

  return (
    <div>
      {!loading ? (
        <Load setLoading={setLoading} /> // Pass setLoading
      ) : (
        <>
          <Navbar />
          <div className="background">
            <video autoPlay loop muted className="background-video">
              <source src="/Mwone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="nes-container with-title is-centered welcome-container">
              <p className="title">Welcome to TechFoss'25 CTF</p>
              <p>
                The ultimate battleground for cybersecurity enthusiasts! Hosted as
                part of TechFoss 2025, our Capture The Flag (CTF) challenge is
                designed to push your skills to the limit, testing your knowledge in
                cryptography, reverse engineering, web security, forensics, and more.
              </p>
              <p>
                Whether you're a beginner eager to learn or a seasoned hacker ready
                to dominate the leaderboard, our CTF offers a platform to showcase
                your problem-solving abilities in a high-energy, competitive
                environment. Join forces with fellow cybersecurity enthusiasts,
                crack complex challenges, and prove your mettle in one of the most
                exhilarating tech events of the year!
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
                  Start
                </button>
                <span className="dialog-container">
                  <dialog className="nes-dialog centered" id="dialog-default">
                    <form method="dialog">
                      <p className="title"></p>
                      <p>Do you want to Continue?</p>
                      <menu className="dialog-menu">
                        <button className="nes-btn">Cancel</button>
                        <button
                          type="button"
                          className="nes-btn is-primary"
                          onClick={() =>
                            document.getElementById("dialog-second").showModal()
                          }
                        >
                          Continue
                        </button>
                      </menu>
                    </form>
                  </dialog>
                </span>
                <dialog className="nes-dialog centered" id="dialog-second">
                  <form method="dialog">
                    <p className="title"></p>
                    <p>Ya'Sure?</p>
                    <menu className="dialog-menu-1">
                      <button
                        className="nes-btn"
                        type="button"
                        onClick={() =>
                          document.getElementById("dialog-second").close()
                        }
                      >
                        Go Back
                      </button>
                      <a href="/tasks" className="nes-btn is-primary">
                        Start
                      </a>
                    </menu>
                  </form>
                </dialog>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
