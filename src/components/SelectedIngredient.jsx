import "../css/SelectedIngredient.css"
import { useState, useEffect } from "react";

const SelectedIngredient = ( props ) => {
    const{ingredients} = props;
    const [ingredientList, setIngredientList] = useState([]);

    const _handleClick = ( e ) => {
        const newIngredients = ingredients;
        const indexOfIngredient = newIngredients.indexOf(e.target.value);
        newIngredients.splice(indexOfIngredient, 1);
        props.onClick(newIngredients);

    };

    useEffect(() => {
        setIngredientList(ingredients);
      }, [props.ingredients]);

      console.log(props);

  return (
    <div className="selected-list">
        <div>
            <h3>Ingredients selected</h3>            
        </div>
        <div>
            <ul>
                { ingredientList.map((ingredient, index) => {
                    return <li key={index} className="selected-ingredient"> 
                        <span>{ingredient.name.charAt(0).toUpperCase()+ingredient.name.slice(1)}</span>
                        <span><button onClick={ _handleClick } value={ingredient}>x</button></span>
                    </li>;
                })}
            </ul>
        </div>
    </div>
  );
};

export default SelectedIngredient;