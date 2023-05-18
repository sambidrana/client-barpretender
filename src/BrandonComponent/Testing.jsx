import { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';

const IngredientsList = () => {
    // const [ingredients, setIngredients] = useState([]);
    const [lists, setLists] = useState([]);
    
    const fetchIngredients = () =>{
        axios(SERVER_URL).then((response) =>{
            const ingredientsForCocktail = (response.data[0].ingredients_list);
            const arrOfIngredients = ingredientsForCocktail.split(", ");
            setLists(arrOfIngredients);

        });
    };
    //prevent infinite communication to the server
    useEffect( fetchIngredients, []);
    console.log("lists: ", lists);

    return (
        <div>
            <ul>
                { lists.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>;
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;