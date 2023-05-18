
const CocktailBtn = (props)=> {
    
    return(
        
        <div>
            {/* cocktail refers to the variable name in the parent */}
        <button>{props.cocktail.name}</button>

        </div>

    );
};

export default CocktailBtn