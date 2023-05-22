const Image = (props)=> {
    
    return(
        <>
        <div className="image-container">
            <img className="display-cocktail" src={ props.cocktailData.image } alt={props.cocktailData.name} />
        </div>
        </>
    );
};

export default Image