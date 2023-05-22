import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/admin.css";


const COCKTAIL_URL = 'http://localhost:3000/barpretender/cocktails';

const UpdateCocktailForm = ({ cocktail, onFetchCocktails, onSetEditing }) => {
    const [name, setName] = useState(cocktail.name);
    const [method, setMethod] = useState(cocktail.method);
    const [ingredients_list, setIngredients] = useState(cocktail.ingredients_list);
    const [image, setImage] = useState(cocktail.image);
    const [allIngredients, setAllIngredients] = useState([]);
    const [ingredientsList, setIngredientsList] = useState(cocktail.ingredients_list);

    useEffect(() => {
        setName(cocktail.name);
        setMethod(cocktail.method);
        if (cocktail.ingredients) {
            setIngredients(cocktail.ingredients.map(ingredient => String(ingredient.id)));
        }
        setImage(cocktail.image);
        setIngredientsList(cocktail.ingredients_list);
        fetchAllIngredients();
    }, [cocktail]);
    

    const fetchAllIngredients = () => {
        axios.get('http://localhost:3000/ingredients')
            .then(response => {
                setAllIngredients(response.data);
            });
    };

    const updateCocktail = () => {
        axios.put(`${COCKTAIL_URL}/${cocktail.id}`, {
            name,
            method,
            ingredients_list: ingredientsList,
            ingredient_ids: ingredients_list,
            image,
        })
        .then(() => {
            setName("");
            setMethod("");
            setIngredients("");
            setImage("");
            setIngredientsList("");
            onSetEditing(false);
            onFetchCocktails();
        });
    };

    return (
        <div className="update-form-container">
          <h2>Update Cocktail</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="update-form-input"
            placeholder="Name"
          />
          <input
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="update-form-input"
            placeholder="Method"
          />
          <input
            type="text"
            value={ingredientsList}
            onChange={(e) => setIngredientsList(e.target.value)}
            className="update-form-input"
            placeholder="Ingredients List"
          />
          <div className="ingredients-grid">
          {allIngredients.map((ingredient) => (
            <label key={ingredient.id} className="update-form-checkbox-label">
              <input
                type="checkbox"
                value={ingredient.id}
                checked={ingredients_list.includes(String(ingredient.id))}
                onChange={(e) => {
                  if (e.target.checked) {
                    setIngredients((prevIngredients) => [
                      ...prevIngredients,
                      e.target.value,
                    ]);
                  } else {
                    setIngredients((prevIngredients) =>
                      prevIngredients.filter((id) => id !== e.target.value)
                    );
                  }
                }}
                className="update-form-checkbox-input"
              />
              {ingredient.name}
            </label>
          ))}
          </div>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="update-form-input"
            placeholder="Image URL"
          />
          <button onClick={updateCocktail} className="update-form-submit">
            Update Cocktail
          </button>
        </div>
      );
      
};

export default UpdateCocktailForm;
