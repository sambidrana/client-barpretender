import { useState, useEffect } from "react";



const CocktailName = (props) => {
    return (
        <>
            <div>
                <h1>{ props.cocktails.name} </h1>
            </div>
        </>
    );
};

export default CocktailName;
