import { useState, useEffect } from "react";
import axios from "axios";

const COCKTAIL_URL = "http://localhost:3000/cocktails";

const CocktailList = function (props) {
  const [cocktails, setCocktails] = useState([]);

  const fetchCoctails = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios(COCKTAIL_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const result = response.data.map( element => element.name );
        setCocktails(result)
        console.log(result);
      }).catch((error) => {
        console.log("Something always wrong", error)
      })
    }
  };

  useEffect(fetchCoctails, []);

  return (
    <div>
      {/* <Cocktail name={cocktails} /> */}

      <h2>List of cocktails</h2>

      <ul>
        {cocktails.map( element => <li key={element} style={{ listStyleType: 'none' }}>  <a href=""> {element} </a> </li>  )}
      </ul>

    </div>
  );
};

export default CocktailList;

// const CocktailList = function (props) {
//   const [cocktails, setCocktails] = useState([]);
//   const [ingredients, setIngredients] = useState([]);

//   // useEffect(() => {
//   //   let token = localStorage.getItem("token");
//   //   if (token) {
//   //     axios(PROFILE_URL, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //   }
//   // }, []);

//   // const fetchCocktails = () => {
//   //   axios(COCKTAIL_URL)
//   //     .then((response) => {
//   //       const result = response.data;
//   //       console.log(result);
//   //     })
//   //     .catch((error) => {
//   //       console.log("Something went wrong.. ", error);
//   //     });
//   // };

//   // useEffect(fetchCocktails, []);

// useEffect(() => {
//   const  PROFILE_URL= "http://localhost:3000/cocktails";
//   let token = localStorage.getItem("token");
//   if (token) {
//     axios(COCKTAIL_URL, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         const result = response.data;

//         for (let i = 0; i < result.length; i++) {
//           ingredients.push(result[i].ingredients_list.split(", "));
//         }

//         setCocktails(result);
//         console.log(ingredients);
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log("Something went wrong.. ", error);
//       });
//   }
// }, []);

//   return (
//     <div>
//       <h2>Map out list of cocktails</h2>

//     </div>
//   );
// };

// export default CocktailList;
