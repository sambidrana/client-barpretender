import { useState } from "react"

const IngredientBox = ( props ) => {
    const {ingredient} = props;
    // const [click, setClick] = useState(false);

    // Capitalise ingredient name
    const IngredientName = ingredient.name.charAt(0).toUpperCase()+ingredient.name.slice(1);

    const _handleClick = () => {
        // click ? setClick(false) : setClick(true);
        props.onClick(ingredient);

    };

  return (
    <div onClick={ _handleClick } className="inline-block ingredient-box">
        <img src={ingredient.image} alt={IngredientName} />
        <p>{IngredientName}</p>
    </div>
  );
};

export default IngredientBox