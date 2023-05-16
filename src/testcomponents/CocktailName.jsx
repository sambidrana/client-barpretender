import { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';

const CocktaillName = () => {
    const [cocktail, setCocktailName] = useState("");

    const fetchCocktail = () => {
        axios(SERVER_URL).then((response) => {
            const nameOfCocktail = (response.data[0].name);
            setCocktailName(nameOfCocktail);
        })
    };
    useEffect(() => {
        fetchCocktail();
    }, [])

    return (
        <>
            <div>
                <h1>{ cocktail} </h1>
            </div>
        </>
    );
};

export default CocktaillName
