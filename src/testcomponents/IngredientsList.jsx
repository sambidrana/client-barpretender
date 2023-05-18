

const IngredientsList = ({ingredientsArray}) => {
    
    const ingredient = "Ingredients";

    return (

        <div className="ingredients-container">
            <h2>{ingredient}</h2>
            <ul className="ingredients">
                { ingredientsArray.map((ingredient, index) => {
                    return <li key={index} className="cocktail-recipe">{ingredient.trim()}</li>
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;