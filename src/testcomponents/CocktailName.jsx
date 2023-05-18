
const CocktailName = (props) => {
    return (
        <>
            <div>
                <h1 className="cocktail-name">{ props.cocktailData.name} </h1>
            </div>
        </>
    );
};

export default CocktailName;
