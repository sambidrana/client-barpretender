import "../../css/admin.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateCocktailForm from './UpdateCocktailForm';
import CocktailList from "./CocktailList";
import CocktailForm from './CocktailForm';
import IngredientForm from './IngredientsForm';
import IngredientsList from './IngredientsList';
import SignOut from "../SignOut";
import { useNavigate } from "react-router-dom";


const COCKTAIL_URL = 'http://localhost:3000/barpretender/cocktails';
const INGREDIENT_URL = 'http://localhost:3000/barpretender/ingredients'; 

const Admin = () => {
    const navigate = useNavigate();
    const [cocktails, setCocktails] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentCocktail, setCurrentCocktail] = useState(null);
    const [allIngredients, setAllIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState(null);
    const [view, setView] = useState('editCocktail');  // 'cocktails', 'createCocktail', 'editCocktail', 'createIngredient', 'editIngredient'

  useEffect(() => {
    if (!localStorage.getItem("admin")) navigate('/')
  }, []);

  const fetchCocktails = () => {
    let token = localStorage.getItem("token");
    if (token) {
    axios.get(COCKTAIL_URL, {
      headers: {
      Authorization: `Bearer ${token}`,
      },
    }).then(response => {
            setCocktails(response.data);
        })};
  };

  useEffect(() => {
    fetchCocktails();
}, []);

  const fetchAllIngredients = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios.get('http://localhost:3000/ingredients', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }).then(response => {
              setAllIngredients(response.data);
      })};
  };
  
  useEffect(() => {
      fetchAllIngredients();
  }, []);



  const handleEditCocktail = (cocktail) => {
      setEditing(true);
      console.log('Editing state:', editing);
      setCurrentCocktail(cocktail);
  };

  const deleteCocktail = (id) => {
    let token = localStorage.getItem("token");
    if (token) {
      axios.delete(`${COCKTAIL_URL}/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }).then(() => {
              fetchCocktails();
          })};
  };


  const handleUpdateIngredient = (ingredient) => {
    let token = localStorage.getItem("token");
    if (token) {
      axios.put(`${INGREDIENT_URL}/${ingredient.id}`, ingredient, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }).then(() => {
              fetchAllIngredients();
              setCurrentIngredient(null);
          })};
  };

  const editIngredient = (ingredient) => {
      setCurrentIngredient(ingredient);
  };


  const deleteIngredient = (id) => {
    let token = localStorage.getItem("token");
    if (token) {
      axios.delete(`${INGREDIENT_URL}/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }).then(() => {
          fetchAllIngredients();
    })};
  };

  useEffect(() => {
    console.log('Editing state:', editing);
  }, [editing]);

  return (
    <div className="container">
      <div className="navbar inline-block">
        <button className="button" onClick={() => setView('createCocktail')}>Create Cocktail</button>
        <button className="button" onClick={() => {
          setView('editCocktail');
          setEditing(false);  // Reset the editing state
        }}>Edit Cocktails</button>
        <button className="button" onClick={() => setView('createIngredient')}>Create Ingredient</button>
        <button className="button" onClick={() => setView('editIngredient')}>Edit Ingredients</button>
      </div>
      <div className="inline-block">
          <a href="/">
              <img className="pointer signout-icon" src="public/home.png" alt="home button"/>
          </a>
          <SignOut />
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
  
export default Admin;