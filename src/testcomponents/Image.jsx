import { useState } from "react";
import axios from "axios";
import "./CocktailDisplay.css"

const Image = (props)=> {
    return(
        <>
        <div className="image-container">
            <img src={ props.cocktailData.image } alt="" className="cocktailimg"/>
        </div>
        </>
    );
};

export default Image