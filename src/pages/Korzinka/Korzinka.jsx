import React from "react";
import CardKorzinka from "./components/cardkorzinka/CardKorzinka";
import HeadKorzinka from "./components/headKorzinka/HeadKorzinka";
import "./components/korzinka.css";
import TotalCard from "./components/totalCard/TotalCard";

const Korzinka = ({ setCount }) => {
  const [local, setLocal] = React.useState([]);
  const [remId, setRemId] = React.useState("");
  const [remPrice, setRemPrice] = React.useState(0);

  const removeLocal = () => {
    if (remId) {
      setCount(JSON.parse(localStorage.getItem("item"))?.length);
      setTotal((p) => Number(p) - Number(remPrice));
      const newArr =
        local?.filter((el) => Number(el.id) !== Number(remId)) || [];
      if (newArr.length > 1) {
        localStorage.setItem("item", JSON.stringify(newArr));
        setCount(newArr?.length);
        setLocal(JSON.parse(localStorage.getItem("item")));
      } else if (newArr.length === 1) {
        setCount(newArr?.length);
        setLocal(newArr);
        localStorage.setItem("item", JSON.stringify(newArr));
      } else {
        setCount(newArr?.length);
        localStorage.setItem("item", JSON.stringify(newArr));
        setCount(newArr?.length);
        setLocal([]);
      }
    }
  };
  React.useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("item")));
    setCount(JSON.parse(localStorage.getItem("item"))?.length);
  }, []);
  React.useEffect(() => {
    removeLocal();
  }, [remId]);

  const [total, setTotal] = React.useState(0);

  return (
    <>
      {local[0] ? (
        <>
          <HeadKorzinka />
          <div className="container">
            {local.map((el) => {
              return (
                <CardKorzinka
                  key={el.id}
                  setRemId={setRemId}
                  setTotal={setTotal}
                  setRemPrice={setRemPrice}
                  {...el}
                />
              );
            })}
            <TotalCard total={total} />
          </div>
        </>
      ) : (
        <div className="container">
          <div className="empty-block">
            <span>This Shopping Card is empty</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Korzinka;
