import { useEffect, useState } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList";
import Method from "./Methods";
import CocktailName from "./CocktailName";
import Image from "./Image";
import "./CocktailDisplay.css"

const CocktailDisplay = (props) => {
    const { cocktailId } = props;
    const SERVER_URL = `http://localhost:3000/barpretender/cocktails/${cocktailId}`;
    const [displayCocktail, setDisplayCocktail] = useState([]);

    const fetchCocktail = () => {
        axios(SERVER_URL).then((response) => {
            const cocktailDetails = response.data;
            setDisplayCocktail(cocktailDetails);
        });
    };

    useEffect(() => {
        fetchCocktail();
    }, []);

    console.log("cocktail: ", displayCocktail)

    const ingredients = displayCocktail ? displayCocktail.ingredients_list : "";
    const ingredientsArray = ingredients ? ingredients.split(",") : [];

    return (
        <>
            <div className="display-container">
                <CocktailName cocktailData={displayCocktail} />
                <div className="cocktail-flex">
                    <Image cocktailData={displayCocktail} />
                    <IngredientsList ingredientsArray={ingredientsArray} />
                    <Method cocktailData={displayCocktail} />
                </div>
            </div>
        </>
    );
};

export default CocktailDisplay