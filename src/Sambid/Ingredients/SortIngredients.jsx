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
  const [matchingCocktails, setMatchingCocktails] = useState([]);// need to list out all the cocktails that matches with ingredients

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
          console.log(result);
        })
        .catch((error) => {
          console.log("Error from DataFromBrandon", error);
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
      // console.log(cocktailIngredients)
  
      // Check if every selected ingredient exists in the cocktail's ingredients list
      const allIngredientsIncluded = ingredients.every((ingredient) =>
        cocktailIngredients.some(
          (cocktailIngredient) => cocktailIngredient.name === ingredient
        )
      );
  
      return allIngredientsIncluded;
    });
  
    setMatchingCocktails(filteredCocktails);
  }, [ingredients, responseData]);

  return (
    <div>
      <div>
        <h2>Selected ingredients</h2>
        {ingredients.map((ing, i) => (
          <p key={i}> {ing} </p>
        ))}
      </div>
      <div>
        <h3>List of Cocktails</h3>
        {matchingCocktails.length > 0 ? (
          <ul>
            {matchingCocktails.map((cocktail) => (
              <button key={cocktail.id}>{cocktail.name} </button>
            ))}
          </ul>
        ) : (
          <p>No cocktails found with the selected ingredients.</p>
        )}
      </div>
    </div>
  );
};

export default SortIngredients;

// const { ingredients, allData } = props;
//   const renderCocktail = [];
//   console.log(allData);

//   const selectedIngredients = { ...ingredients }; // no function fi
//   console.log(ingredients);
//   console.log(selectedIngredients);

//   const filterCocktail = allData.filter((item) => {
//     return ingredients.includes(item.name);
//   });

//   console.log(filterCocktail);
//   // this page sort the selection done from "DataFromBrandon" and should render all cocktails that can be made from that ingredients
//   return (
//     <div>
//       <div>
//         <h3>Selection</h3>
//       </div>
//       {ingredients.map((ing, i) => (
//         <p key={i}> {ing} </p>
//       ))}

//       <h3>Cocktails:</h3>
//       <ul>
//         {filterCocktail.map((item) => {
//           return item.cocktails.map((cocktail) => {
//             if (!renderCocktail.includes(cocktail.name)) {
//               renderCocktail.push(cocktail.name);
//               return <button key={cocktail.id}>{cocktail.name}</button>;
//             }
//             return null;
//           });
//         })}
//       </ul>
//     </div>
//   );
// };
