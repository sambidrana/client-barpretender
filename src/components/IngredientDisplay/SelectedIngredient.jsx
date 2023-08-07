import "../../css/SelectedIngredient.css"
import { useState, useEffect } from "react";

const SelectedIngredient = ( props ) => {
    const{ingredients} = props;
    const [ingredientList, setIngredientList] = useState([]);

    const _handleClick = ( e ) => {
        const newIngredients = ingredientList.slice(0);
        newIngredients.splice(e.target.value, 1);
        props.onClick(newIngredients);
        console.log(newIngredients)
    };

    useEffect(() => {
        setIngredientList(ingredients);
      }, [props.ingredients]);

      console.log(props);

  return (
    <div className="selected-list">
        <div className="selected-list-heading">
            <h2>Selected Ingredients</h2>
        </div>
        <div className="selected-list-body">
            <ul>
                { ingredientList.map((ingredient, index) => {
                  return (
                    <li key={index} className="selected-ingredient"> 
                      <div className="selected-list-container">
                        <span>{ingredient.name[0].toUpperCase()+ingredient.name.slice(1)}</span>
                        <button className="selected-list-btn" onClick={_handleClick} value={index}>Remove</button>
                      </div>
                    </li>
                  );
                })}
            </ul>
        </div>
    </div>
  );
};

export default SelectedIngredient;