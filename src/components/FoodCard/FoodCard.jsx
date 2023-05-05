import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FoodCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const FoodCard = ({ bestFood }) => {
  const { foodImg, foodName, price, id, description, reviews } = bestFood;
  return (
    <div
      className="card mb-3 p-2"
      style={{ backgroundColor: "rgba(250, 231, 223, 0.5)" }}
    >
      <div className="row g-0">
        <div className="col-md-4 text-center">
          {/* <img src={foodImg} className="img-fluid rounded-start" alt="..." />        */}
          <LazyLoadImage
            src={foodImg}
            effect="blur"
            className="img-fluid rounded-start"
            alt="Image Alt"
            variant="top"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center text-md-start">
            <h5 className="card-title">
              {foodName}.............${price}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">{reviews}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
