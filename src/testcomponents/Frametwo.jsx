import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import SelectCocktail from "./SelectCocktail";
import CocktailDisplay from "./CocktailDisplay";
import ParentComponent from "./ParentComponent";
import "./Frametwo.css"

const Frametwo = () => {
    return (
        <>
            <div className="frame-two">
                <Header />
                <div className="main-wrapper"></div>
                <Sidebar />
                <CocktailDisplay cocktailId={28} />
                </div>
                <div className="selection">
                <SelectCocktail />
                <ParentComponent />

            </div>
        </>
    );
};

export default Frametwo