import React from 'react'
import "./HeadKorzinka.css"
const HeadKorzinka = () => {
  return (
    <div className="container head-korzinka">
      <p className="head-remove">x</p>
      <p className='head-img'>Image</p>
      <p className='head-title'>Title</p>
      <p className="head-unit">Unit Price</p>
      <p className="head-btn-box">Count</p>
      <p className="head-price">Price</p>
    </div>
  );
}

export default HeadKorzinka