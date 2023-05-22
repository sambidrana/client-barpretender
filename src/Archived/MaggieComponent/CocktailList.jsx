import React from 'react';
import axios from 'axios';
import CocktailItem from './CocktailItem';
import "../css/admin.css";


const COCKTAIL_URL = 'http://localhost:3000/barpretender/cocktails';

const CocktailList = ({ cocktails, onEditCocktail, onFetchCocktails, editing, currentCocktail, onSetEditing }) => {
    const deleteCocktail = (id) => {
        axios.delete(`${COCKTAIL_URL}/${id}`)
        .then(() => {
            onFetchCocktails();
        });
    };

    const handleDelete = (id) => {
        deleteCocktail(id); 
    };

    return (
        <div className="cocktail-list">
          {cocktails.map((cocktail) => (
            <div key={cocktail.id} className="cocktail-item">
              <CocktailItem
                cocktail={cocktail}
                onEditCocktail={onEditCocktail}
                onDeleteCocktail={handleDelete}
                onFetchCocktails={onFetchCocktails}
                isEditing={editing && cocktail === currentCocktail}
                onSetEditing={onSetEditing}
              />
              <div className="cocktail-item-buttons">
                <button
                  className="cocktail-item-button"
                  onClick={() => onEditCocktail(cocktail)}
                >
                  Edit
                </button>
                <button
                  className="cocktail-item-button"
                  onClick={() => handleDelete(cocktail.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      );
};

export default CocktailList;
