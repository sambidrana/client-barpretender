import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import RecipeSearch from "./RecipeSearch";
const Frametwo= () => {
    return(
        <>
            <div className="frame-two">
                <Header />
                <div className=""></div>
                <Sidebar />
                <RecipeSearch/>
            </div>
        </>
    );
    };

export default Frametwo