import React from "react";
import levelImg from "../../img/level.png"
import "./Level.css"

const Level = () => {
  return (
    <>
      <section className="level">
        <div className="container level-container">
          <div className="level-img-box">
            <img src={levelImg} alt="Rasm" />
          </div>
          <div className="level-content">
            <h2 className="level-title">Be your Own Level</h2>
            <p className="level-text">
              The right shoes can take any outfit from basic to stylish with
              just a few steps. At our shoe store, we have a wide variety of
              stylish shoes to help you create the perfect look. From
              contemporary sneakers to classic loafers, we have something to
              match all tastes and occasions. Our shoes are designed to be
              comfortable, durable, and fashionable, so you can look and feel
              your best no matter what you’re wearing.
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Level;