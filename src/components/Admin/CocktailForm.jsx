import { useState, useEffect } from 'react';
import axios from 'axios';


const COCKTAIL_URL = 'http://localhost:3000/barpretender/cocktails';
const INGREDIENT_URL = 'http://localhost:3000/barpretender/ingredients';

const CocktailForm = ({ onFetchCocktails }) => {
    const [newName, setNewName] = useState("");
    const [newMethod, setNewMethod] = useState("");
    const [newIngredients, setNewIngredients] = useState("");
    const [newImage, setNewImage] = useState("");
    const [allIngredients, setAllIngredients] = useState([]);
    const [newIngredientsList, setNewIngredientsList] = useState("");

    useEffect(() => {
        fetchAllIngredients();
    }, []);

    const fetchAllIngredients = () => {
      let token = localStorage.getItem("token");
      if (token) {
        axios.get(INGREDIENT_URL, {
          headers: {
          Authorization: `Bearer ${token}`,
          },
      }).then(response => {
                setAllIngredients(response.data);
            });
    }};

    const createCocktail = () => {
      let token = localStorage.getItem("token");
      if (token) {
        axios.post(COCKTAIL_URL, {
            name: newName,
            method: newMethod,
            ingredients_list: newIngredientsList,
            ingredient_ids: newIngredients,
            image: newImage, 
        }, {
          headers: {
          Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
            setNewName("");
            setNewMethod("");
            setNewIngredients("");
            setNewImage("");
            setNewIngredientsList("");
            onFetchCocktails();
        })};
        
    };

    return (
        <div className="update-form-container">
          <h2 className="cocktail-form-heading">Create Cocktail</h2>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="update-form-input"
            placeholder="Name"
          />
          <input
            type="text"
            value={newMethod}
            onChange={(e) => setNewMethod(e.target.value)}
            className="update-form-input"
            placeholder="Method"
          />
          <input
            type="text"
            value={newIngredientsList}
            onChange={(e) => setNewIngredientsList(e.target.value)}
            className="update-form-input"
            placeholder="Ingredient Measurements"
          />
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            className="update-form-input"
            placeholder="Image URL"
          />
          <div className="ingredients-grid">
          {allIngredients.map((ingredient) => (
            <label key={ingredient.id} className="update-form-checkbox-label">
              <input
                type="checkbox"
                value={ingredient.id}
                onChange={(e) => {
                  if (e.target.checked) {
                    setNewIngredients((prevIngredients) => [
                      ...prevIngredients,
                      e.target.value,
                    ]);
                  } else {
                    setNewIngredients((prevIngredients) =>
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
          <button onClick={createCocktail} className="update-form-submit">
            Create Cocktail
          </button>
        </div>
      );
    };
    
    export default CocktailForm;
    