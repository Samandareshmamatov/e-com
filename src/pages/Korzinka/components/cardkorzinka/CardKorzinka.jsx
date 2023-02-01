import React from "react";
import "./CardKorzinka.css";

const CardKorzinka = (props) => {
  let {setRemPrice} = props;
  const [counter, setCounter] = React.useState(1);
  return (
    <div className="korzinka-box">
      <button  className="korzinka-remove" onClick={() => {
        props.setRemId(props.id);
        let a = props.price * (counter - 1);
        setRemPrice(a);
      }}></button>
      <img className="korzinka-img" src={props.thumbnail} alt="Rasm" />
      <h2 className="korzinka-title">{props.title}</h2>
      <p className="korzinka-unit">{props.price} $</p>
      <div className="korzinka-btn-box">
        <button
          className="korzinka-delete"
          onClick={() => {
            setCounter((p) => (p > 1 ? p - 1 : 1));
            props.setTotal((p) => (counter > 1 ? p - props.price : p));
          }}
        ></button>
        <span className="korzinka-count">{counter - 1}</span>
        <button
          className="korzinka-add"
          onClick={() => {
            setCounter((p) => p+1);
            props.setTotal((p) =>  p + props.price);
          }}
        ></button>
      </div>
      <p className="korzinka-price">{props.price * (counter-1)} $</p>
    </div>
  );
};

export default CardKorzinka;
