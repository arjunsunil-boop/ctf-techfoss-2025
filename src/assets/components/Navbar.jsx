import React, { useState, useEffect } from "react";
import "nes.css/css/nes.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className={scrollPos > 50 ? "sticky" : ""}>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="nav-brand">
              <i className="snes-jp-logo brand-logo"></i>
              <p className="techfoss">TECHFOSS'25</p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="capture">
              <h1>Capture The Flag</h1>
              <img src="/flag.png" className="flag" alt="Flag" />
            </div>
          </div>
          <div
            className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
            style={{ position: "relative", textAlign: "right" }}
          >
            <button className="hamburger" onClick={toggleDropdown}>
              ☰
            </button>
            {dropdownVisible && (
              <div className="dropdown">
                <Link to="/" onClick={() => setDropdownVisible(false)}>
                  Home
                </Link>
                <Link to="/tasks" onClick={() => setDropdownVisible(false)}>
                  Tasks
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
