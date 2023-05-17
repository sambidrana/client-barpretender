import { useState } from "react";
import "./Frametwo.css"
const Sidebar =() => {
    const [cocktailBuilder, setBuilder] = useState(false);
    const [recipes, setRecipes] = useState(false);
    // const [random, setRandom] = useState(false);
    
    const _handleBuilderClick =(e) => {
        e.preventDefault();
        setBuilder(true);
        console.log('builder clicked')
    };

    const _handleRecipeClick = (e) => {
        e.preventDefault();
        setRecipes(true);
        console.log("recipes clicked")
    };

    // const _handleRandomClick =(e) => {
    //     e.preventDefault();
    //     setRandom(true);
    //     console.log('random clicked')
    // };

    // if(setBuilder === true){
    //     // return <redirect></redirect>
    // }
    // if(set === true){
    //     // return <redirect></redirect>
    // }
    // if(setRecipes === true){
    //     // return <redirect></redirect>
    // }
    // if(setRandom === true){
    //     // return <redirect></redirect>
    // }

             return(
        <>
            <div className="sidearea">
                <h2>make cocktails</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quo minus, maxime, dolore veritatis molestias, temporibus repellendus sapiente iusto soluta facere quod laudantium autem harum officia fugit quam et magnam!</p>
                <div className="options">
                <button className="cocktail-btn" onClick={_handleBuilderClick}>Cocktail Builder</button>
                <button className="cocktail-btn" onClick={_handleRecipeClick}>Cocktail recipes</button>
                {/* <button className="random-cocktails" onClick={_handleRandomClick}>We choose a cocktail for you</button> */}
                </div>
            </div>
        </>
    );
    };

export default Sidebar