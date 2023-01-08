import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Cards() {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(5);
  const loadMore = () => {
    setCounter(counter + 4);
  };
  const loadLess = () => {
    setCounter(counter - 4);
  };
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${counter}`)
      .then(function (response) {
        // console.log("j", response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log("rr", error);
      });
  }, [counter]);

  return (
    <>
      {" "}
      <div>
        <div className="products">
          <h1> Products</h1>
        </div>
        <div className="cards">
          {data
            ? data?.map((e, index) => (
                <Card
                  key={index}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                  rating={e.rating}
                  category={e.category}
                  id={e.id}
                />
              ))
            : "hh"}
        </div>
      </div>
      <div className="btn">
        {counter > 19 ? "" : <button onClick={loadMore}>load more</button>}
      </div>
    </>
  );
}

export default Cards;
