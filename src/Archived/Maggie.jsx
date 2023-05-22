import "../css/admin.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateCocktailForm from '../Archived/MaggieComponent/UpdateCocktail';
import CocktailList from "../Archived/MaggieComponent/CocktailList";
import CocktailForm from '../Archived/MaggieComponent/CocktailForm';
import IngredientForm from '../Archived/MaggieComponent/IngredientsForm';
import IngredientsList from '../Archived/MaggieComponent/IngredientsList';
import { NavLink } from 'react-router-dom';


const COCKTAIL_URL = 'http://localhost:3000/barpretender/cocktails';
const INGREDIENT_URL = 'http://localhost:3000/barpretender/ingredients'; 

const Cocktails = () => {
    const [cocktails, setCocktails] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentCocktail, setCurrentCocktail] = useState(null);
    const [allIngredients, setAllIngredients] = useState([]);

    useEffect(() => {
        fetchCocktails();
    }, []);

    useEffect(() => {
        console.log('Editing state:', editing);
    }, [editing]);

    const fetchAllIngredients = () => {
        axios.get('http://localhost:3000/ingredients')
            .then(response => {
                setAllIngredients(response.data);
            });
    };
    
    useEffect(() => {
        fetchAllIngredients();
    }, []);

    const fetchCocktails = () => {
        axios.get(COCKTAIL_URL)
            .then(response => {
                setCocktails(response.data);
            });
    };

    const handleEditCocktail = (cocktail) => {
        setEditing(true);
        console.log('Editing state:', editing);
        setCurrentCocktail(cocktail);
    };

    const deleteCocktail = (id) => {
        axios.delete(`${COCKTAIL_URL}/${id}`)
            .then(() => {
                fetchCocktails();
            });
    };

    const [currentIngredient, setCurrentIngredient] = useState(null);

    const handleUpdateIngredient = (ingredient) => {
        axios.put(`${INGREDIENT_URL}/${ingredient.id}`, ingredient)
            .then(() => {
                fetchAllIngredients();
                setCurrentIngredient(null);
            });
    };

    const editIngredient = (ingredient) => {
        setCurrentIngredient(ingredient);
};


    const deleteIngredient = (id) => {
        axios.delete(`${INGREDIENT_URL}/${id}`)
        .then(() => {
            fetchAllIngredients();
    });
};

const [view, setView] = useState('cocktails');  // 'cocktails', 'createCocktail', 'editCocktail', 'createIngredient', 'editIngredient'

return (
    <div className="admin-container">
      <div className="navbar">
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <button className="button" onClick={() => setView('createCocktail')}>Create Cocktail</button>
        <button className="button" onClick={() => {
          setView('editCocktail');
          setEditing(false);  // Reset the editing state
        }}>Edit Cocktails</button>
        <button className="button" onClick={() => setView('createIngredient')}>Create Ingredient</button>
        <button className="button" onClick={() => setView('editIngredient')}>Edit Ingredients</button>
      </div>
  
      <div className="container">
        {view === 'createCocktail' && <CocktailForm onFetchCocktails={fetchCocktails} />}
        {view === 'editCocktail' && !editing && (
          <CocktailList
            cocktails={cocktails}
            onEditCocktail={(cocktail) => {
              setEditing(true);
              setCurrentCocktail(cocktail);
            }}
            onDeleteCocktail={deleteCocktail}
            onFetchCocktails={fetchCocktails}
            currentCocktail={currentCocktail}
          />
        )}
        {view === 'editCocktail' && editing && (
          <UpdateCocktailForm 
            cocktail={currentCocktail} 
            onFetchCocktails={fetchCocktails} 
            onSetEditing={setEditing} 
          />
        )}
        {view === 'createIngredient' && <IngredientForm onFetchIngredients={fetchAllIngredients} onUpdateIngredient={handleUpdateIngredient} currentIngredient={currentIngredient} />}
        {view === 'editIngredient' && <IngredientsList ingredients={allIngredients} onEdit={editIngredient} onDelete={deleteIngredient} onFetchIngredients={fetchAllIngredients} />}
      </div>
    </div>
  );
};
  
export default Cocktails;