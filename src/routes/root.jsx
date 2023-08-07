import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategorySelectionList from "../components/IngredientDisplay/CategorySelectionList";
import CocktailDisplayList from "../components/CocktailDisplay/CocktailDisplyList";
import SignOut from "../components/SignOut";
import "../css/mainStyle.css";

const Root = () => {
  const [username, setUsername] = useState("");
  const [ingredientList, setIngredientsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUsername(localStorage.getItem("user"));
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <div className="header-container">
        <div className="root-title">
          <h1>Bar-Pretender</h1>
        </div>
        <header className="root-header">
          <div className="inline-block">
            <h2 className="header-welcome">
              Welcome <span className="header-username">{username}</span>, the
              bar is now yours!
            </h2>
          </div>
          <div className="inline-block header-logo-container">
            {/* check if to show admin button */}
            {localStorage.getItem("admin") && (
              <a href="/admin" className="font">
                <img
                  className="pointer signout-icon header-logo"
                  src="public/admin.png"
                  alt="sign-out"
                />
              </a>
            )}
            <SignOut />
          </div>
        </header>
      </div>
      <div className="root-selection-container">
                {/* Cocktail selection list */}
                <div className="selectionlist inline-block category-container">
                    <CategorySelectionList ingredientList={ setIngredientsList } />
                </div>
                <div className="selectionlist inline-block cocktail-container">
                    {/* Render CocktailDisplayList only when there are selected ingredients */}
                    {ingredientList.length > 0 && (
                        <CocktailDisplayList ingredients={ ingredientList } />
                    )}
                </div>
            </div>
    </div>
  );
};

export default Root;
