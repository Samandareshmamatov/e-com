import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({count}) => {
    
  return (
    <>
      <header>
        <div className="container header-container">
          <div className="header-logo-block">
            <Link to={"/"}>
              <h2 className="header-logo">Rapture Athletics</h2>
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">Men</li>
              <li className="header-item">Women</li>
              <li className="header-item">Kids</li>
              <li className="header-item">Customize</li>
              <li className="header-item">Contact</li>
            </ul>
          </nav>
          <div className="header-right-block">
            <p className="header-item-link"></p>
            <Link to={"/korzinka"}>
              <div className="korzinka-link header-item-link ">
                <span className="counter-local">{count}</span>
              </div>
            </Link>
            <Link to={"/login"}>
              <div className="login-link header-item-link"></div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
