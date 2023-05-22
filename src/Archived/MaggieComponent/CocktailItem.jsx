import React from 'react';
import UpdateCocktailForm from './UpdateCocktail';
import "../css/admin.css";


const CocktailItem = ({ cocktail, onEditCocktail, onDeleteCocktail, onFetchCocktails, isEditing, onSetEditing }) => {
  const handleDelete = () => {
    onDeleteCocktail(cocktail.id);
  };

  const handleEdit = () => {
    onEditCocktail(cocktail);
  };

  return (
    <div key={cocktail.id} className="cocktail-item">
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image} alt={cocktail.name} className="cocktail-item-image" />
    </div>
  );
  
};

export default CocktailItem;
