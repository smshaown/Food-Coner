import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";

const TopRecipe = ({ recipeCard }) => {
  
  const [clicked, setClicked] = useState(false)


  const {recipeName, cooking_method} = recipeCard;

  const handleClick = () => {
    setClicked(true);
    // do something when button is clicked
    alert('this card')
  };


  console.log(recipeCard);
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={recipeCard.recipeItemsImg} />
          <Card.Body>
            <Card.Title>{recipeName}</Card.Title>
            <Card.Text>
              {cooking_method}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-info" onClick={handleClick} disabled={clicked}>{clicked ? <FcLike /> : <GrFavorite /> } Favarit  </button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TopRecipe;
