import React from "react";
import "./CardBox.css"

const CardBox = ({children}) => {
  return (
    <>
      <section className="card-box">
        <div className="container">
          <h2 className="card-box-title">Trending in 2023</h2>
        </div>
        <div className="container card-box-container">{children}</div>
      </section>
    </>
  );
}

export default CardBox;