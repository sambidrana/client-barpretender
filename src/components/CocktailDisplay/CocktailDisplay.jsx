import { useEffect, useState } from "react";
import axios from "axios";
import Method from "./Methods";
import IngredientsList from "./IngredientsList";
import Image from "./Image";

const CocktailDisplay = (props) => {
  const { cocktailId, ingredientsChange } = props;
  const [displayCocktail, setDisplayCocktail] = useState([]);
  // const [reset, setReset ] = useState(false)
  console.log(ingredientsChange);

  const SERVER_URL = `http://localhost:3000/cocktails/${cocktailId}`;

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
  }, [ingredientsChange]);

  const ingredients = displayCocktail ? displayCocktail.ingredients_list : "";
  const ingredientsArray = ingredients ? ingredients.split(",") : [];

  return (
    <>
      {cocktailId  && displayCocktail ? (
        <div className="display-container">
          <h2> {displayCocktail.name} </h2>
          <div className="display-img">
            <Image cocktailData={displayCocktail} />
          </div>
          <div className="display-ingredients">
            <IngredientsList ingredientsArray={ingredientsArray} />
          </div>
          <div className="display-methods">
            <Method cocktailData={displayCocktail} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CocktailDisplay;
