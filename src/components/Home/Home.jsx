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
    console.log(storedCart);

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

  return (
    <div className="flex gap-4">
      <div className="cards w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {meals.map((meal) => (
          <Card meal={meal} key={meal.idMeal} handleBtn={handleBtn}></Card>
        ))}
      </div>
      <div className="carts w-3/12">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Home;
