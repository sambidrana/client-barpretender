import axios from "axios";

import { useState, useEffect } from "react";

const SortIngredients = (props) => {
  const COCKTAILS_URL = "http://localhost:3000/cocktails";

  // My Task
  // check the ingredients that was selected
  // Chceck from my Cocktails json file if the ingredient matches with any cocktails
  //Print/List out all the cocktails that can be made with the ingredients

  const { ingredients } = props; // This data is coming from brandon, which will have a list of ingredients
  const [responseData, setResponseData] = useState([]); //coming from the backend containg all Cocktails and its ingredients
  const [matchingCocktails, setMatchingCocktails] = useState([]); // need to list out all the cocktails that matches with ingredients

  const fetchCocktails = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios(COCKTAILS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const result = response.data;
          setResponseData(result);
        })
        .catch((error) => {
          console.log("Error from CocktailDisplayList", error);
        });
    }
  };

  useEffect(fetchCocktails, []);

  //**this is the path to get into ingredients
  // responseData.forEach((cocktail) => console.log(cocktail.ingredients.map( (ingredient) => (ingredient.name))));

  useEffect(() => {
    // Filter the cocktails based on the selected ingredients
    const filteredCocktails = responseData.filter((cocktail) => {
      const cocktailIngredients = cocktail.ingredients;
      // Check if every selected ingredient exists in the cocktail's ingredients list
      const allIngredientsIncluded = ingredients.every((ingredient) =>
        cocktailIngredients.some(
          (cocktailIngredient) => cocktailIngredient.name === ingredient.name
        )
      );

      return allIngredientsIncluded;
    });

    setMatchingCocktails(filteredCocktails);
  }, [ingredients, responseData]);

  
  const _handleClick = (cocktailId) => {
    props.onClick(cocktailId);
  };

  return (
    <>
  {ingredients.length > 0 ? (  // Only render the list if ingredients array is not empty
    <div className="cocktails-list-container">
      <h2>List of Cocktails</h2>
      {matchingCocktails.length > 0 ? (
        <ul className="ingredient-selection-list ul-cocktails">
          {matchingCocktails.map((cocktail) => (
            <li key={cocktail.id} className="generalise-list">
              <div className="cocktail-selection-box" onClick={() => _handleClick(cocktail.id)} tabIndex="0">
                <img src={cocktail.image} alt={cocktail.name} />
                <div className="cocktail-selection-button">
                  {cocktail.name}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cocktails found with the selected ingredients.</p>
      )}
    </div>
  ) : null} 
</>

  );
  
};

export default SortIngredients;


