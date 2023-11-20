import React from "react";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import logoImage from "/public/images/home/about/subscribe/shared/coffee-roasters-logo.png";
import { Routes, Route } from "react-router-dom";
import MobileNav from "./MobileNav";
import "/src/index.css";

<img className="top-logo" src={logoImage} alt="Coffee Roasters Logo" />;

function Nav() {
  return (
    <>
      <div className="nav-el">
        <div className="logo-box-el">
          <img
            className="top-logo"
            src="./public/images/home/about/subscribe/shared/coffee-roasters-logo.png"
          ></img>
        </div>
        <div className="mobile-nav">
          <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="mobile-nav-component">
            <MobileNav />
          </div>
        </div>
        <div className="nav">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Nav;
