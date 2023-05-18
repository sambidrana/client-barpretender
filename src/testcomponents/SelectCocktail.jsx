import axios from "axios";
import { useState, useEffect } from "react";
import CocktailBtn from "./CocktailBtn";


// const cocktailURL = 'http://localhost:3000/cocktails';
const SelectCocktail = () => {
    const cocktail = {"id":2,"name":"Margarita","method":"Rub the rim of a chilled coupette with a lime wedge, and dip in salt. Shake tequila, lime juice, and triple sec with ice. Double strain into salt-rimmed glass.","ingredients_list":"60 ml tequila, 30 ml lime juice, 15 ml triple sec, Salt rim and lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.761Z","updated_at":"2023-05-14T08:02:57.761Z"}
    // const [cocktailSelection, setCocktailSelection] = useState([]);
    // const fetchCocktail = () => {
    //             axios(cocktailURL).then((response) => {
    //             const aCocktail = (response.data[14])
    //             setCocktailSelection(aCocktail);
    //         }).catch((error)=> {
    //             console.log(error)
    //         })
    //     };

    //     useEffect(() => {
    //         fetchCocktail();
    //     }, []);
    //     console.log("cocktail", cocktailSelection);


        return (
            <>
                <div className="selection-container">
                    <CocktailBtn cocktail ={cocktail}/>
                </div>
            </>
        );
    };


export default SelectCocktail
