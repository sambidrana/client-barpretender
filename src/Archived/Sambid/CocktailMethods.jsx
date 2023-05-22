import CocktailList from "./CocktailList";

const CocktailMethod = (props) => {

    const {name} = props
    console.log(name)

    return (
        <div>
            Cocktail Method
            <p> {name} </p>
        </div>
    )
}

export default CocktailMethod;