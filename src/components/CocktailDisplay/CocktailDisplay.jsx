import { useEffect, useState } from "react";
import axios from "axios";
import Method from "./Methods";
import IngredientsList from "./IngredientsList";
import Image from "./Image";
// import "./Display.css"

const CocktailDisplay = (props) => {
  const { cocktailId, ingredientsChange } = props;
  const [displayCocktail, setDisplayCocktail] = useState([]);
  // const [reset, setReset ] = useState(false)
  console.log(ingredientsChange)

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
      <div className="display-container add-border">
        <h1> {displayCocktail.name} </h1>
        {cocktailId ? (
          <div>
            <div className="block"> 
            <Image cocktailData={displayCocktail} />
            </div>
            <div className=""> 
            <IngredientsList ingredientsArray={ingredientsArray} />
            </div>
            <div className=""> 
            <Method cocktailData={displayCocktail} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CocktailDisplay;
