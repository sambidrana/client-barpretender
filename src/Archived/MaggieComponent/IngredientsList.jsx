import React, { useState } from 'react';
import IngredientForm from './IngredientsForm';
import "../css/admin.css";

const IngredientsList = ({ ingredients, onDelete, onFetchIngredients }) => {
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const editIngredient = (ingredient) => {
    setCurrentIngredient(ingredient);
  };

  const clearCurrentIngredient = () => {
    setCurrentIngredient(null);
  };

  return (
    <div className="ingredients-container">
      <h2 className="ingredients-heading">Ingredients</h2>
      <div className="ingredients-list-grid">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="ingredients-item">
            <div className="ingredient-details">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="ingredients-image"
              />
              <span className="ingredients-name">{ingredient.name}</span>
            </div>
            <div className="ingredient-buttons">
              <button
                className="ingredients-button"
                onClick={() => editIngredient(ingredient)}
              >
                Edit
              </button>
              <button
                className="ingredients-button"
                onClick={() => onDelete(ingredient.id)}
              >
                Delete
              </button>
            </div>
            {currentIngredient && currentIngredient.id === ingredient.id && (
              <IngredientForm
                currentIngredient={currentIngredient}
                onUpdateIngredient={clearCurrentIngredient}
                onFetchIngredients={onFetchIngredients}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsList;
