import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './cart.css';

const Cart = ({ cart, deleteBtn ,deleteSingleBtn}) => {
  // console.log(cart);
  const mealName = [];
  for (const singleMeal of cart) {
    // console.log(singleMeal.strMeal);
    mealName.push(singleMeal.strMeal);
  }
  //   console.log(mealName);
  
  return (
    <div>
      {mealName.map((meal, index) => (
        <li className="listStyle"  key={index}>{meal} <FontAwesomeIcon onClick={()=>deleteSingleBtn(meal)} className="ml-2 cursor-pointer" icon={faDeleteLeft} /></li>
      ))}
      <button onClick={deleteBtn} className="btn btn-accent mt-4 block w-full mx-auto">
        Delete All
      </button>
    </div>
  );
};

export default Cart;
