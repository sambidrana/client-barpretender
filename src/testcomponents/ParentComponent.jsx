import CocktailList from "./CocktailList";


const ParentComponent = () => {
    const cocktailsData = [
        {
            "id": 21,
            "name": "Daiquiri",
            "method": "Shake rum lime juice, and simple syrup with ice. Double strain into a chilled coupette. Garnish with a lime twist.",
            "ingredients_list": "60 ml white rum, 30 ml lime juice, 15 ml simple syrup, Lime twist for garnish",
            "image": "http://localhost:3000/assets/cocktail_img/daiquiri.jpg",
            "user_id": 3,
            "created_at": "2023-05-17T01:50:00.155Z",
            "updated_at": "2023-05-17T01:50:00.288Z",
            "ingredients": [
                {
                    "id": 26,
                    "name": "white rum",
                    "category": "base_spirit",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.244Z",
                    "updated_at": "2023-05-17T01:50:00.244Z"
                },
                {
                    "id": 27,
                    "name": "lime",
                    "category": "other_ingredient",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.246Z",
                    "updated_at": "2023-05-17T01:50:00.246Z"
                },
                {
                    "id": 28,
                    "name": "simple syrup",
                    "category": "other_ingredient",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.247Z",
                    "updated_at": "2023-05-17T01:50:00.247Z"
                }]
        },
        {
            "id": 22,
            "name": "Margarita",
            "method": "Rub the rim of a chilled coupette with a lime wedge, and dip in salt. Shake tequila, lime juice, and triple sec with ice. Double strain into salt-rimmed glass.",
            "ingredients_list": "60 ml tequila, 30 ml lime juice, 15 ml triple sec, Salt rim and lime wedge for garnish", "image": "http://localhost:3000/assets/cocktail_img/margarita.jpg",
            "user_id": null,
            "created_at": "2023-05-17T01:50:00.157Z",
            "updated_at": "2023-05-17T01:50:00.157Z",
            "ingredients": [
                {
                    "id": 27,
                    "name": "lime",
                    "category": "other_ingredient",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.246Z",
                    "updated_at": "2023-05-17T01:50:00.246Z"
                },
                {
                    "id": 29,
                    "name": "tequila",
                    "category": "base_spirit",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.249Z",
                    "updated_at": "2023-05-17T01:50:00.249Z"
                },
                {
                    "id": 30,
                    "name": "tripe sec",
                    "category": "other_alcohol",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.250Z",
                    "updated_at": "2023-05-17T01:50:00.250Z"
                }
            ]
        },
        {
            "id": 23,
            "name": "Moscow Mule",
            "method": "Fill a copper mug or a highball glass with ice. Add the vodka and lime juice to the glass. Top up the glass with ginger beer. Stir the ingredients gently to combine. Garnish the cocktail with a lime wedge.",
            "ingredients_list": "60 ml vodka, 120 ml ginger beer, 15 ml lime juice, Ice, Lime wedge for garnish",
            "image": "http://localhost:3000/assets/cocktail_img/moscow_mule.jpg",
            "user_id": null,
            "created_at": "2023-05-17T01:50:00.159Z",
            "updated_at": "2023-05-17T01:50:00.159Z",
            "ingredients": [
                {
                    "id": 27,
                    "name": "lime",
                    "category": "other_ingredient",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.246Z",
                    "updated_at": "2023-05-17T01:50:00.246Z"
                },
                {
                    "id": 34,
                    "name": "vodka",
                    "category": "base_spirit",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.257Z",
                    "updated_at": "2023-05-17T01:50:00.257Z"
                },
                {
                    "id": 35,
                    "name": "ginger beer",
                    "category": "other_ingredient",
                    "image": "",
                    "created_at": "2023-05-17T01:50:00.259Z",
                    "updated_at": "2023-05-17T01:50:00.259Z"
                }
            ]
        }
    ];


    // const baseSpiritValue = (ingredientName) => {
    //     for(spirit of cocktailsData){
    //         const baseSpirit = cocktail.ingredients.
    //         if (ingredient){
    //             return ingredient.name;
    //             console.log(ingredient);
    //         }
    //     }
    // }

    // console.log(baseSpirit);
    return (
        <div className="parent-component">
            <h2></h2>

            <CocktailList cocktails={cocktailsData} />

        </div>
    );
};
export default ParentComponent
