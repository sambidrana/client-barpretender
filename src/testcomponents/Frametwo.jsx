import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import Display from "./Display";
const Frametwo= () => {
    return(
        <>
            <div className="frame-two">
                <Header />
                <div className=""></div>
                <Sidebar />
                {/* <RecipeSearch/> */}
                <Display />
            </div>
        </>
    );
    };

export default Frametwo