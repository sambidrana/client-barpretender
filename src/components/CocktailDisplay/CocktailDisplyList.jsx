import { useState } from "react";
import SortIngredients from "./SortIngredients";
import CocktailDisplay from "./CocktailDisplay";

const CocktailDisplayList = function ( props ) {
  const [cocktail, setCocktail] = useState("");

  return (
    <div className="display-cocktail-container">
        <SortIngredients ingredients={props.ingredients} onClick={setCocktail}/>
        <CocktailDisplay cocktailId={cocktail} ingredientsChange={props.ingredients} />
    </div>
  );
};

export default CocktailDisplayList;
