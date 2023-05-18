import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";

import SelectCocktail from "./SelectCocktail";
import CocktailDisplay from "./CocktailDisplay";

const Frametwo = () => {
    return (
        <>
            <div className="frame-two">
                <Header />
                <div className=""></div>
                <Sidebar />
                {/* <RecipeSearch/> */}
                <CocktailDisplay cocktailId={5} />
                <SelectCocktail />

            </div>
        </>
    );
};

export default Frametwo