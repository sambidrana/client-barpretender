import { useEffect, useState } from "react";
import axios from "axios";
import IngredientBox from "./IngredientBox";
import SelectedIngredient from "../components/SelectedIngredient";

const SERVER_URL = 'http://localhost:3000/barpretender/ingredients';

const CategorySelectionList = ( props ) => {
    const [baseSpirit, setBaseSpirit] = useState([]);
    const [otherAlcohol, setOtherAlcohol] = useState([]);
    const [otherIngredient, setOtherIngredient] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    // fetch ingredient from seed and split into catogories
    const fetchCategories = () => {
        let token = localStorage.getItem("token");
        if (token) {    // check token with JWT
            axios(SERVER_URL, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }).then((response) =>{
                response.data.forEach(ingredient => {
                    // separate catogories
                    ingredient.category === "base_spirit"? setBaseSpirit(baseSpirit => [...baseSpirit, ingredient]):
                    ingredient.category === "other_alcohol"?  setOtherAlcohol(otherAlcohol => [...otherAlcohol, ingredient]):
                    setOtherIngredient(otherIngredient =>[...otherIngredient, ingredient]);
                });
            });
        };
    };
    
    useEffect( fetchCategories, []);

    // Deselect when click on the same ingredient for the second time
    const recordSelect = ( ingredient ) => {
        if (selectedIngredients.includes(ingredient)) {
            const tempIngredients = selectedIngredients.slice(0);
            const indexOfIngredient = tempIngredients.indexOf(ingredient);
            tempIngredients.splice(indexOfIngredient, 1);
            setSelectedIngredients(tempIngredients);
            props.ingredientList(tempIngredients);
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
            console.log(selectedIngredients);
            props.ingredientList([...selectedIngredients, ingredient]);
        };
    };

    // Reset while deleting from the list
    const resetSelect = ( ingredients ) => {
        const newIngredients=ingredients.slice()
        setSelectedIngredients( newIngredients );
        props.ingredientList(ingredients);
    };

  return (
    <div>
        {/* onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} */}

        <SelectedIngredient ingredients = { selectedIngredients } onClick={ resetSelect } />

        <div className="ingredient-category">
            <h3>Base Spirit</h3>
        </div>
        <div className="ingredient-lists">
            {baseSpirit.map((ingredient, index) => {
                return <IngredientBox ingredient={ingredient} onClick={ recordSelect } key={index}/>
            })}
        </div>
        <div className="ingredient-category">
            <h3>Other Alcohol</h3>
        </div>
        <div className="ingredient-lists">
            {otherAlcohol.map((ingredient, index) => {
                return <IngredientBox ingredient={ingredient} onClick={ recordSelect }  key={index}/>
            })}
        </div>
        <div className="ingredient-category">
            <h3>Other Ingredient</h3>
        </div>
        <div className="ingredient-lists">        
            {otherIngredient.map((ingredient, index) => {
                return <IngredientBox ingredient={ingredient} onClick={ recordSelect }  key={index}/>
            })}
        </div>
    </div>
  );
};

export default CategorySelectionList;