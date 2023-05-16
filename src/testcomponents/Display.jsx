import { useEffect, useState } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList";
import Methods from "./Methods";
import CocktailName from "./CocktailName";
import Image from "./Image";
import "./Display.css"


const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';
const Display = () => {
    const [displayCocktails, setShowCocktails] = useState([]);
    const fetchCocktail = () => {
        axios(SERVER_URL).then((response) => {
            const cocktailDetails = (response.data[0]);
            setShowCocktails(cocktailDetails);
        });
    };

    useEffect(() => {
        fetchCocktail();
    },[]);
    console.log("cocktail: ", displayCocktails )

    return (
        <>
            <div className="display-container">
                <CocktailName />
                <div className="cocktail-flex">
                    <Image />
                    <IngredientsList />
                    <Methods />
                </div>
            </div>
        </>
    );
};

export default Display