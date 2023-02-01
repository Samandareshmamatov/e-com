import React from "react";
import { Hero, Media, Level, Card, CardBox} from "../../components"
import axios from "axios";
import { useEffect } from "react";

function Home({setCount}) {

  const [state, setState] = React.useState([]);
  const [more, setMoree] = React.useState(true);

  const addLocal = (id) => {
        axios("https://dummyjson.com/products").then((res) => {
          res.data.products?.map((el) => {
            if (el.id === id) {
              const arrData = JSON.parse(localStorage.getItem("item")) || [];
              const bool = arrData.find((element) => element.id === id);
              if (bool) {
                alert("Oldin qo'shilgan");
                setCount(arrData.length);
              } else {
                arrData.push(el);
                setCount(arrData.length);
                localStorage.setItem("item", JSON.stringify(arrData));
              }
            }
            return "";
          });
        });
  }

  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) => {
      setState(res.data.products)
      setCount(JSON.parse(localStorage.getItem("item")).length);
    });
  }, []);

  useEffect(()=>{
     setCount(JSON.parse(localStorage.getItem("item"))?.length || 0);
  }, [addLocal])

  const loadMore = () => {
    setMoree(!more);
  };
  return (
    <>
      <Hero />
      <Media />
      <Level />
      <CardBox>
        {more ? (
          <>
            <div className="card-box-container">
              {" "}
              {state.slice(0, 8).map((el) => {
                return <Card key={el.id + 1} addLocal={addLocal} {...el} />;
              })}
            </div>
            <button className="btn-card" onClick={loadMore}>
              Load More
            </button>
          </>
        ) : (
          <>
            <div className="card-box-container">
              {state.map((el) => {
                return <Card key={el.id + 1} addLocal={addLocal} {...el} />;
              })}
            </div>
            <button className="btn-card" onClick={loadMore}>
              Exit
            </button>
          </>
        )}
      </CardBox>
    </>
  );
}

export default Home;