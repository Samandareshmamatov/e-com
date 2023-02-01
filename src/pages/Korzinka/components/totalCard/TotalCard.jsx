import React from 'react';
import "./TotalCard.css"

const TotalCard = ({total}) => {
  return (
    <div className="container">
      <div className="total-box">
        <p className="total-uniqe">SubPrice : {total} $</p>
        <p className="total-delivery">Delivery : 20 $</p>
        <p className="total-price">Total : {total ? total + 20 : 0} $</p>
        <button className="total-btn">Check Out</button>
      </div>
    </div>
  );
}

export default TotalCard