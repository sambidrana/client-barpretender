// import { useState } from "react";
import NavBar from "../components/NavBar";
import DataFromBrandon from "../Sambid/Ingredients/DataFromBradon";
import SortIngredients from "../Sambid/Ingredients/SortIngredients";
const Cocktail = ( props ) => {

    return (
        <div className="container">
            <NavBar />
            <DataFromBrandon />
            {/* <SortIngredients /> */}
        </div>
    );
};

export default Cocktail;