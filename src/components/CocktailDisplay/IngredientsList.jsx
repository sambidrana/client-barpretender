const IngredientsList = ({ingredientsArray}) => {
    
    const ingredient = "Ingredients";

    // map ingredient that is selected
    return (

        <div className="ingredients-container">
            <h2>{ingredient}</h2>
            <ul >
                { ingredientsArray.map((ingredient, index) => {
                    return <li key={index} className="ingredients-lists">{ingredient.trim()}</li>
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;