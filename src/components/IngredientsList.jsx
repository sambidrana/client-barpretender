
const IngredientsList = ({ingredientsArray}) => {
    
    const ingredient = "Ingredients";

    // map ingredient that is selected
    return (

        <div className="ingredients-container">
            <h2>{ingredient}</h2>
            <ul className="removepadding">
                { ingredientsArray.map((ingredient, index) => {
                    return <li key={index} className="generalise-list">{ingredient.trim()}</li>
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;