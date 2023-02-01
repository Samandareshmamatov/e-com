import React from "react";
import "./Media.css"

const Media = () =>{
  return (
    <>
      <section className="media">
        <div className="media-left"></div>
        <div className="media-center">
          <ul className="media-list">
            <li className="media-item">Facebook</li>
            <li className="media-item">Instagram</li>
            <li className="media-item">Twitter</li>
          </ul>
        </div>
        <div className="media-right">
          <p className="media-text">Explore More →</p>
        </div>
      </section>
    </>
  );
}

export default Media;