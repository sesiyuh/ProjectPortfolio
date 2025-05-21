import React from "react";
import "./Hero.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img-container">
            <img src={process.env.PUBLIC_URL + "/assets/me.png"} alt="Profile" className="home__img" />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;