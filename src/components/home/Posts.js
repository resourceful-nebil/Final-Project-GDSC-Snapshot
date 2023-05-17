import React, { useState, useEffect } from "react";
import "../App.css";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="product-container">
      {loading && (
        <div>
          <h1>Loading....</h1>
        </div>
      )}
      {data.map((product)=> (
        <div className="card" key={product.id}>
          <div><img src={product.image}/></div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
          </div>
        </div>
      ))

      }
    </div>
  );
}

export default Posts;
