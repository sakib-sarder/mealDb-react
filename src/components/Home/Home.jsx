import React, { useEffect, useState } from "react";
import Card from "../../card/Card";
import Cart from "../../Cart/Cart";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('meal-cart'));
    if (storedCart) {
      setCart(storedCart);
    }

  },[meals])
  //cart btn funtion
  const handleBtn = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
    const savedCart = [];
    const previousCart = JSON.parse(localStorage.getItem('meal-cart'));
    if (previousCart) {
      savedCart.push(...previousCart, meal);
    } else {
      savedCart.push(meal);
    }
    localStorage.setItem('meal-cart', JSON.stringify(savedCart))
  }
  const deleteBtn = ()=>{
    localStorage.removeItem('meal-cart');
    setCart([]);
  }
  const deleteSingleBtn = (meal) => {
    const localItem = JSON.parse(localStorage.getItem('meal-cart'));
    const remaining = localItem.filter(local => local.strMeal !== meal);
    localStorage.setItem('meal-cart', JSON.stringify(remaining));
    //without localStorage
    const previous = cart.filter(cartMeal => cartMeal.strMeal !== meal);
    setCart(previous);

  }

  return (
    <div className="flex gap-4 container mx-auto flex-col md:flex-row">
      <div className="cards w-10/12 mx-auto mb-5 md:w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {meals.map((meal) => (
          <Card meal={meal} key={meal.idMeal} handleBtn={handleBtn}></Card>
        ))}
      </div>
      <div className="carts w-full md:w-3/12 px-4">
        <Cart cart={cart} deleteBtn={deleteBtn} deleteSingleBtn={deleteSingleBtn} />
      </div>
    </div>
  );
};

export default Home;
