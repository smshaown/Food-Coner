import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TolTip.css'

const TopRecipe = ({ recipeCard }) => {
  const {recipeName, cooking_method, ingredients, rating} = recipeCard;

  const [clicked, setClicked] = useState(false)


 
  console.log(ingredients)

  const handleClick = () => {
    setClicked(true);     
    const successMessage = "Disablee the code";
    toast.success(successMessage);
  };


  // console.log(recipeCard);
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={recipeCard.recipeItemsImg} className="img-fluid" style={{width: "100%", height: "350px"}} />
          <Card.Body>
            <Card.Title>{recipeName}</Card.Title>
            <Card.Text>
              {cooking_method}
            </Card.Text>
            <div>
              <h3>Ingredients</h3>
              <h4>rating: {recipeCard.rating.number} </h4>

                <span className="mt-3 li">
                {
                  ingredients.map((items, index) => <ol>
                    <li>{items}</li>
                  </ol>)
                }
                </span>
                
            </div>
          </Card.Body>
          <div>
            <button className="btn btn-info mb-2 ml-2" onClick={handleClick} disabled={clicked}>{clicked ? <FcLike /> : <GrFavorite /> } Favourite  </button>
          </div>
        </Card>
      </CardGroup>
      <ToastContainer />
    </div>
  );
};

export default TopRecipe;
