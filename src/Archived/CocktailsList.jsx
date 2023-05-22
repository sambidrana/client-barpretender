import { useState } from "react";
import CocktailList from "../Sambid/CocktailList";
import NavBar from "../components/NavBar";
import SignOut from "../Sambid/SignOut/SignOut";

const CocktailsList = ( props ) => {

    return (
        <div className="container">
            <NavBar />
            <SignOut />
            <CocktailList />
            
        </div>
    );
};

export default CocktailsList;