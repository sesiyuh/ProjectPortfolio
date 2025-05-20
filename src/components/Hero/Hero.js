import React from "react";
import "./Hero.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
// Import the profile image directly
import profileImg from "../../assets/me.png";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          {/* Create an actual img element instead of a background image */}
          <div className="home__img-container">
            <img src={profileImg} alt="Profile" className="home__img" />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;