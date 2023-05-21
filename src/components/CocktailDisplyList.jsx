// import axios from "axios";
import { useState } from "react";
import SortIngredients from "./CocktailDisplay/SortIngredients";
import CocktailDisplay from "./CocktailDisplay/CocktailDisplay";

const CocktailDisplayList = function ( props ) {
  const [cocktail, setCocktail] = useState("");

  return (
    <div>
      <CocktailDisplay cocktailId={cocktail} ingredientsChange={props.ingredients} />
      <SortIngredients ingredients={props.ingredients} onClick={setCocktail}/>
    </div>
  );
};

export default CocktailDisplayList;
