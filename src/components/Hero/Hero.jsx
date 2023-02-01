import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container container">
          <h1 className="hero-title">Step Into Style with Our Trendy Shoes!</h1>
          <p className="hero-year">2023</p>
          <p className="hero-text">
            Our collections include a wide range of shoes for men, women, and
            children.
          </p>
          <button className="btn hero-btn">Shop Now</button>
        </div>
      </section>
    </>
  );
}

export default Hero;