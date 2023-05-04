import React from "react";
import { Card, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegThumbsUp, FaElementor } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const MasterSingleCard = ({ master }) => {
  const {
    id,
    image,
    name,
    year_of_experience,
    number_of_recipes,
    likes,
    rating,
  } = master;
  return (
    <div>
      <Col>
        <Card
          className="p-2 service-card mb-4"
          style={{ backgroundColor: "#FDF1ED" }}
        >
          {/* <Card.Img className="service-img  img-fluid" variant="top" src={image} /> */}
          <LazyLoadImage
            src={image}
            effect="blur"
            className="img-fluid w-100"
            alt="Image Alt"
            variant="top"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="">{year_of_experience}</Card.Text>
            <div className="d-flex gap-4">
              <div>
                <h6>
                  <FaRegThumbsUp /> {likes}
                </h6>
              </div>
              <div>
                <h6>
                  <FaElementor /> {number_of_recipes}
                </h6>
              </div>
            </div>
            <Link className="link-btn" to={`/masterViewDetails/${id}`}>
              <button className="btn btn-danger w-full mt-1">
                VIEW RECIPES
              </button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MasterSingleCard;
