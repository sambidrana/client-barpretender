const CocktailList= (props) => {
    

    return(
        <div>
            <h1>props.cocktails[0].</h1>
       { props.cocktails.map(cocktail =>(
            <button key={cocktail.id}>{cocktail.name}</button>
        ))}

        </div>
    );
};

export default CocktailList;