import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import Display from "./Display";
import SelectCocktail from "./SelectCocktail";
const Frametwo= () => {
    return(
        <>
            <div className="frame-two">
                <Header />
                <div className=""></div>
                <Sidebar />
                {/* <RecipeSearch/> */}
                <Display />
                <SelectCocktail />
            </div>
        </>
    );
    };

export default Frametwo