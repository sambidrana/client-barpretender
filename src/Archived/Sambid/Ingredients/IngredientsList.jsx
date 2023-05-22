

const IngredientsList = ({ingredientsArray}) => {
    
    const ingredient = "Ingredients";

    return (

        <div className="ingredients-container">
            <h2>{ingredient}</h2>
            <ul>
                { ingredientsArray.map((ingredient, index) => {
                    return <li key={index}>{ingredient.trim()}</li>
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;