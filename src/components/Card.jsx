import React from "react";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";

function Card({ image, title, id, description, price, rating, category }) {
  return (
    <div className="card">
      <div className="image">
        <img alt="" src={image} className="clas" />
      </div>
      <div className="card-text">
        <div className="header">
          <h2> {title}</h2>
          <h1> {price}$</h1>
        </div>
        <p> {description} </p>
        <Link to={`/products/`}>
          <a href=""> For more info</a>
        </Link>
      </div>
      <div className="card-footer">
        <div className="star">
          <img src={star} />
          <h4>{rating.rate}</h4>
        </div>
        <div className="">
          <button className="card-button"> add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
