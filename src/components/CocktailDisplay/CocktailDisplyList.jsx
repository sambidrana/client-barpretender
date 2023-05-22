import { useState } from "react";
import SortIngredients from "./SortIngredients";
import CocktailDisplay from "./CocktailDisplay";

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
