import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TolTip.css";

const TopRecipe = ({ recipeCard }) => {
  const { recipeName, cooking_method, ingredients, rating } = recipeCard;

  const [clicked, setClicked] = useState(false);

  console.log(ingredients);

  const handleClick = () => {
    setClicked(true);
    const successMessage = "Disablee the code";
    toast.success(successMessage);
  };

  // console.log(recipeCard);
  return (
    <div>
     

          <div className="card" style={{width: "18rem"}}>
            <img src={recipeCard.recipeItemsImg} style={{width: "100%", height: "300px"}} className="card-img-top" alt="..." />
            <p></p>
            <div className="card-body">
              <h3 className="">{recipeName}</h3>
              <h4>Rating: {recipeCard.rating.number} </h4>
                <p>{cooking_method}</p>
              <h5 className="card-title">Ingredients:</h5>
              
             
              <span classNameName="mt-3 li">
                    {ingredients.map((items, index) => (
                      <ol>
                        <li>{items}</li>
                      </ol>
                    ))}
                  </span>


              <button
                  className="btn btn-warning mb-2 ml-2"
                  onClick={handleClick}
                  disabled={clicked}
                >
                  {clicked ? <FcLike /> : <GrFavorite />} Favourite{" "}
                </button>
            </div>
          </div>



      <ToastContainer />
    </div>
  );
};

export default TopRecipe;
