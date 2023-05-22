import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/admin.css";


const INGREDIENT_URL = 'http://localhost:3000/barpretender/ingredients';

const IngredientForm = ({ currentIngredient, onUpdateIngredient, onFetchIngredients }) => {
    const [name, setName] = useState(currentIngredient ? currentIngredient.name : "");
    const [category, setCategory] = useState(currentIngredient ? currentIngredient.category : "");
    const [image, setImage] = useState(currentIngredient ? currentIngredient.image : "");

    useEffect(() => {
        if (currentIngredient) {
            setName(currentIngredient.name);
            setCategory(currentIngredient.category);
            setImage(currentIngredient.image);
        }
    }, [currentIngredient]);

    const submitForm = () => {
        if (currentIngredient) {
            axios.put(`${INGREDIENT_URL}/${currentIngredient.id}`, {
                name,
                category,
                image
            })
            .then(() => {
                onUpdateIngredient();
                onFetchIngredients();
            });
        } else {
            axios.post(INGREDIENT_URL, {
                name,
                category,
                image
            })
            .then(() => {
                setName("");
                setCategory("");
                setImage("");
                onFetchIngredients();
            });
        }
    };

    return (
        <div className="ingredient-form-container">
          <h2 className="ingredient-form-heading">
            {currentIngredient ? 'Edit' : 'Create'} Ingredient
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ingredient-form-input"
            placeholder="Name"
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="ingredient-form-input"
            placeholder="Image"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="ingredient-form-select"
          >
            <option value="">--Select Category--</option>
            <option value="base_spirit">Base Spirit</option>
            <option value="other_ingredient">Other Ingredient</option>
            <option value="other_alcohol">Other Alcohol</option>
          </select>
          <button onClick={submitForm} className="ingredient-form-submit">
            {currentIngredient ? 'Update' : 'Create'} Ingredient
          </button>
        </div>
      );
};

export default IngredientForm;
