import { useEffect, useState } from "react";
import axios from "axios";
import IngredientsList from "./IngredientsList";
import Methods from "./Methods";
import CocktailName from "./CocktailName";
import Image from "./Image";
import "./Display.css";

const cocktails =[{"id":2,"name":"Margarita","method":"Rub the rim of a chilled coupette with a lime wedge, and dip in salt. Shake tequila, lime juice, and triple sec with ice. Double strain into salt-rimmed glass.","ingredients_list":"60 ml tequila, 30 ml lime juice, 15 ml triple sec, Salt rim and lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.761Z","updated_at":"2023-05-14T08:02:57.761Z"},{"id":3,"name":"moscow mule","method":"Fill a copper mug or a highball glass with ice. Add the vodka and lime juice to the glass. Top up the glass with ginger beer. Stir the ingredients gently to combine. Garnish the cocktail with a lime wedge.","ingredients_list":"60 ml vodka, 120 ml ginger beer, 15 ml lime juice, Ice, Lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.763Z","updated_at":"2023-05-14T08:02:57.763Z"},{"id":4,"name":"gimlet","method":"Shake ingredients in a cocktail shaker over ice. Double strain into chilled coupette and garnish with lime twist.","ingredients_list":"60 ml gin, 30 ml lime juice, 15 ml simple syrup, Lime twist for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.766Z","updated_at":"2023-05-14T08:02:57.766Z"}]
// const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';
const Display = () => {
    // const [displayCocktails, setShowCocktails] = useState([]);
    // const fetchCocktail = () => {
    //     axios(SERVER_URL).then((response) => {
    //         const cocktailDetails = (response.data[12]);
    //         setShowCocktails(cocktailDetails);
    //     });
    // };

    // useEffect(() => {
    //     fetchCocktail();
    // }, []);
    // // console.log("cocktail: ", displayCocktails)

    return (
        <>
            <div className="display-container">
                <CocktailName cocktails={cocktails} />
                <div className="cocktail-flex">
                    <Image cocktails={cocktails} />
                    <IngredientsList cocktails={cocktails} />
                    <Methods cocktails={cocktails} />
                </div>
            </div>
        </>
    );
};

export default Display