import axios from "axios";
import { useState, useEffect } from "react";



// const cocktailURL = 'http://localhost:3000/cocktails';
const SelectCocktail = () => {
    // const cocktail = {"id":2,"name":"Margarita","method":"Rub the rim of a chilled coupette with a lime wedge, and dip in salt. Shake tequila, lime juice, and triple sec with ice. Double strain into salt-rimmed glass.","ingredients_list":"60 ml tequila, 30 ml lime juice, 15 ml triple sec, Salt rim and lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.761Z","updated_at":"2023-05-14T08:02:57.761Z"}
    const cocktails = [{"id":2,"name":"Margarita","method":"Rub the rim of a chilled coupette with a lime wedge, and dip in salt. Shake tequila, lime juice, and triple sec with ice. Double strain into salt-rimmed glass.","ingredients_list":"60 ml tequila, 30 ml lime juice, 15 ml triple sec, Salt rim and lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.761Z","updated_at":"2023-05-14T08:02:57.761Z"},{"id":3,"name":"moscow mule","method":"Fill a copper mug or a highball glass with ice. Add the vodka and lime juice to the glass. Top up the glass with ginger beer. Stir the ingredients gently to combine. Garnish the cocktail with a lime wedge.","ingredients_list":"60 ml vodka, 120 ml ginger beer, 15 ml lime juice, Ice, Lime wedge for garnish","image":"","user_id":null,"created_at":"2023-05-14T08:02:57.763Z","updated_at":"2023-05-14T08:02:57.763Z"}]

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
                </div>
            </>
        );
    };


export default SelectCocktail
