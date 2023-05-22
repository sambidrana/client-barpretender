import { useEffect, useState } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList";
import Method from "./Methods";
import Image from "./Image";
// import "./Display.css"

const CocktailDisplay = (props) => {
  const { cocktailId, ingredientsChange } = props;
  const [displayCocktail, setDisplayCocktail] = useState([]);
  const [reset, setReset ] = useState(false)

  const SERVER_URL = `http://localhost:3000/barpretender/cocktails/${cocktailId}`;

  const fetchCocktail = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios(SERVER_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setDisplayCocktail(response.data);
      });
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [SERVER_URL]);

  useEffect(() => {
    setDisplayCocktail([]);
    setReset(true)
  }, [ingredientsChange]);

  const ingredients = displayCocktail ? displayCocktail.ingredients_list : "";
  const ingredientsArray = ingredients ? ingredients.split(",") : [];

  return (
    <>
      <div className="display-container">
        <h1> {displayCocktail.name} </h1>
        {cocktailId || !reset ? (
          <div className="cocktail-flex">
            <Image cocktailData={displayCocktail} />
            <IngredientsList ingredientsArray={ingredientsArray} />
            <Method cocktailData={displayCocktail} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CocktailDisplay;
