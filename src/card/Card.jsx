import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ meal, handleBtn }) => {
  //   console.log(meal, handleBtn);
  const { strMeal: name, strCategory: category, strMealThumb: image } = meal;
  const handleBtnInCard = handleBtn;
  return (
    <>
      <div className="card w-full glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="pl-2 py-2">
          <h2 className="card-title">{name}</h2>
          <p>Category: {category}</p>
          <p>Price: {}</p>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleBtnInCard(meal)}
            className="btn btn-primary w-full"
          >
            Add To Cart
            <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
