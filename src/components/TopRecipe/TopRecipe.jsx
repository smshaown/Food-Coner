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
      {/* <Row xs={1} md={3} classNameName="">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={recipeCard.recipeItemsImg}
              classNameName="img-fluid"
              style={{ width: "100%", height: "300px" }}
            />
            <Card.Body>
              <Card.Title>{recipeName}</Card.Title>
              <Card.Text>
                <div>
                  <h3>Ingredients</h3>
                  <h4>rating: {recipeCard.rating.number} </h4>

                  <span classNameName="mt-3 li">
                    {ingredients.map((items, index) => (
                      <ol>
                        <li>{items}</li>
                      </ol>
                    ))}
                  </span>
                </div>
              </Card.Text>
              <div>
                <button
                  classNameName="btn btn-info mb-2 ml-2"
                  onClick={handleClick}
                  disabled={clicked}
                >
                  {clicked ? <FcLike /> : <GrFavorite />} Favourite{" "}
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}


          <div className="card" style={{width: "18rem"}}>
            <img src={recipeCard.recipeItemsImg} style={{width: "100%", height: "300px"}} className="card-img-top" alt="..." />
            <p></p>
            <div className="card-body">
              <h3 className="card-title">Ingredients</h3>
              <h4>Rating: {recipeCard.rating.number} </h4>
             
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
