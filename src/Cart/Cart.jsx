import React from "react";

const Cart = ({ cart }) => {
  // console.log(cart);
  const mealName = [];
  for (const singleMeal of cart) {
    // console.log(singleMeal.strMeal);
    mealName.push(singleMeal.strMeal);
  }
//   console.log(mealName);
  return (
    <div>
      {mealName.map((meal,index) => (
        <li key={index}>{meal}</li>
      ))}
          <button className="btn btn-accent mt-4 block w-full mx-auto">Delete</button>
    </div>
  );
};

export default Cart;
