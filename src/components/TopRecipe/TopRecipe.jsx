import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
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
    const successMessage = "success your Favourite Item";
    toast.success(successMessage);
  };

  // console.log(index);
  return (
    <div>
     

     <Card  style={{ width: '22rem' }}>
        <Card.Img variant="top" src={recipeCard.recipeItemsImg} className="img-fluid" style={{ width: '100%', height: '300px' }} />
        <Card.Body>
          <hr />
          <Card.Title>{recipeName}</Card.Title>
          <Card.Subtitle className="mb-2">Rating: {recipeCard.rating.number}</Card.Subtitle>
          <Card.Text>{cooking_method}</Card.Text>
          <Card.Title>Ingredients:</Card.Title>
          <ul className="mt-3 li">
            {ingredients.map(items => (
              <li>{items}</li>
            ))}
          </ul>
          <Button variant="warning" className="mb-2 ml-2" onClick={handleClick} disabled={clicked}>
            {clicked ? <FcLike /> : <GrFavorite />} Favourite
          </Button>
        </Card.Body>
      </Card>


      <ToastContainer />
    </div>
  );
};

export default TopRecipe;
