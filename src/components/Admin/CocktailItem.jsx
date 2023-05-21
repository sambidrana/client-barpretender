import React from 'react';
import UpdateCocktailForm from './UpdateCocktailForm';



const CocktailItem = ({ cocktail, onEditCocktail, onDeleteCocktail, onFetchCocktails, isEditing, onSetEditing }) => {
  const handleDelete = () => {
    onDeleteCocktail(cocktail.id);
  };

  const handleEdit = () => {
    onEditCocktail(cocktail);
  };

  return (
    <>
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image} alt={cocktail.name} className="cocktail-item-image" />
    </>
  );
  
};

export default CocktailItem;
