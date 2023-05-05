import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./MasterViewDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa";
import { FaRegThumbsUp, FaElementor, FaHeart } from "react-icons/fa";
import { Button, Card, Col, Row } from "react-bootstrap";
import TopRecipe from "../TopRecipe/TopRecipe";

const MasterViewDetails = () => {
  const { id } = useParams();
  const viewDetails = useLoaderData();

  const { recipe } = viewDetails;

  const handleClick = () => {
    setButtonDisabled(true);
    // do something when button is clicked
  };

  return (
    <div className="mb-5">
      <div class="card text-bg-dark service-banner">
        <img
          src={
            "https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?b=1&s=612x612&w=0&k=20&c=tt7mF9bmZmFkGhYvCeHTkpUH45crp9WoPWaqo0mgMpA="
          }
          class="card-img img-fluid"
          alt="..."
        />
        <div class="card-img-overlay  d-flex justify-content-center align-items-center">
          <button className="buttonInfo">
            {" "}
            <Link to="/">Home</Link> <FaArrowRight /> Recipe{" "}
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid about-img"
              src={viewDetails?.image}
              alt=""
            />
          </div>
          <div className="col-md-6 grid mt-5">
            <h1 className="mt-3">{viewDetails?.name}</h1>
            <p className="mt-4">{viewDetails?.chefDescription}</p>
            <div>
              <h4>{viewDetails?.year_of_experience}</h4>
              <h6 className="mt-3 mb-3">
                Likes: {viewDetails?.likes}
              </h6>
              <h6>
                Number of Recipes : {viewDetails?.number_of_recipes}
              </h6>
              <div></div>
            </div>
          </div>

          <h2 className="mt-5 mb-5 text-center"> Top Recipes Recipes</h2>
         
          <Row sm={1} xs={12} md={3} className="mx-auto">
          {
            recipe?.map(recipeCard => <TopRecipe key={recipeCard.id} recipeCard={recipeCard}></TopRecipe>)
          }
          </Row>
          
        </div>
      </div>
    </div>
  );
};

export default MasterViewDetails;
