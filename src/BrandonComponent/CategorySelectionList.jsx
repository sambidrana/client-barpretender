import { useEffect, useState } from "react";
import axios from "axios";
import IngredientBox from "./IngredientBox";
import SelectedIngredient from "../components/SelectedIngredient";

const SERVER_URL = 'http://localhost:3000/barpretender/ingredients';

const CategorySelectionList = () => {
    const [baseSpirit, setBaseSpirit] = useState([]);
    const [otherAlcohol, setOtherAlcohol] = useState([]);
    const [otherIngredient, setOtherIngredient] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    // const fakeIngredients = ['apple', 'lemon', 'lime'];

    const fetchCategories = () => {
        let token = localStorage.getItem("token");
        if (token) {
            axios(SERVER_URL, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }).then((response) =>{
                response.data.forEach(ingredient => {
                    ingredient.category === "base_spirit"? setBaseSpirit(baseSpirit => [...baseSpirit, ingredient]):
                    ingredient.category === "other_alcohol"?  setOtherAlcohol(otherAlcohol => [...otherAlcohol, ingredient]):
                    setOtherIngredient(otherIngredient =>[...otherIngredient, ingredient]);
                });
            });
        };
    };
    
    useEffect( fetchCategories, []);

    const recordSelect = ( ingredient ) => {
        if (selectedIngredients.includes(ingredient)) {
            const tempIngredients = selectedIngredients.slice(0);
            const indexOfIngredient = tempIngredients.indexOf(ingredient);
            tempIngredients.splice(indexOfIngredient, 1);
            setSelectedIngredients(tempIngredients);
            console.log(tempIngredients);
            console.log(selectedIngredients);
            console.log('Click remove');
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
            console.log(selectedIngredients);
            console.log('Click add');
        };
    };

    const resetSelect = ( ingredients ) => {
        setSelectedIngredients(ingredients);
    };
    console.log(selectedIngredients)

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