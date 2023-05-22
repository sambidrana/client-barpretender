import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategorySelectionList from "../components/IngredientDisplay/CategorySelectionList";
import CocktailDisplayList from "../components/CocktailDisplay/CocktailDisplyList";
import SignOut from "../components/SignOut";
// import NavBar from "../components/NavBar";
import "../css/style.css"


const Root = () => {
    const [username, setUsername] = useState('');
    const [ingredientList, setIngredientsList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setUsername(localStorage.getItem("user"));
        } else {
            navigate('/signin')
        };
    }, []); 

    return (
        <div className="container">
            <header>
                <div className="inline-block welcome">
                    <h2>Welcome {username}, the bar is now yours!</h2>
                </div>
                <div className="inline-block">
                    {/* check if to show admin button */}
                    { localStorage.getItem("admin") &&
                    <a href="/admin" className="font">
                        <img className="pointer signout-icon" src="public/admin.png" alt="sign-out"/>
                    </a> }
                    <SignOut />
                </div>
            </header>
            {/* <NavBar /> */}
            {/* Cocktail selection list */}
            <div className="banner">
            </div>
            <div className="selectionlist inline-block add-border">
                <CategorySelectionList ingredientList={ setIngredientsList } />
            </div>
            <div className="selectionlist inline-block">
                <CocktailDisplayList ingredients={ ingredientList } />
            </div>
        </div>
    );
};

export default Root;