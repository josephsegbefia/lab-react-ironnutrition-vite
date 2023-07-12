// Your code here
import React from "react";
function FoodBox(props) {
  const { name, image, calories, servings, id } = props.food;
  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>
      <button onClick={() => props.delFood(id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
