// Your code here

import React from "react";
import { useState } from "react";

function AddFoodForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  return (
    <div>
      <form>
        <label>Name:</label>
        <input name="name" type="text" value={name} />

        <label>Image:</label>
        <input name="image" type="text" value={image} />

        <label>Calories:</label>
        <input name="calories" type="text" value={calories} />

        <label>Servings:</label>
        <input name="servings" type="text" value={servings} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
