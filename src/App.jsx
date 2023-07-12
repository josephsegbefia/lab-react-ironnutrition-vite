import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const newFoodList = [...foods].filter((food) => food.id !== foodId);

    setFoods(newFoodList);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm />

      <h4>Food List</h4>
      {foods.map((food) => (
        <FoodBox food={food} key={food.id} delFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
