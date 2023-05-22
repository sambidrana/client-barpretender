import axios from "axios";
import { useState, useEffect } from "react";
import SortIngredients from "./SortIngredients";
import CocktailDisplay from "./CocktailDisplay";

const DataFromBrandon = function () {
  const INGREDIENTS_URL = "http://localhost:3000/ingredients";
  //should pass an array of ingredients down to me - eg Whiskey
  const [ingredients, setIngredients] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [cocktail, setCocktail] = useState("");


  const fetchIngredients = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios(INGREDIENTS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const result = response.data;
          setResponseData(result);
        })
        .catch((error) => {
          console.log("Error from DataFromBrandon", error);
        });
    }
  };

  useEffect(fetchIngredients, []);

  const _handleIngredients = (name) => {
    setIngredients([...ingredients, name]);
  };

  return (
    <div>
      <div>List of ingredients</div>
      {responseData.map((obj) => {
        return (
          <button key={obj.id} onClick={() => _handleIngredients(obj.name)}>
            {obj.name}
          </button>
        );
      })}
      <SortIngredients
        ingredients={ingredients}
        onClick={setCocktail}
      />
      <CocktailDisplay cocktailId={cocktail} ingredientsChange={ingredients} />
    </div>
  );
};

export default DataFromBrandon;
