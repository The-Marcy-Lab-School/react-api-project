import { handleFetch } from "../utils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([])
    const { id } = useParams();

    // for (let i = 0; i < recipe.length; i++) {
    //     //iterate through the json
    //     //if key contains 'strIngredients' place the value in the LI
    //     if (Object.keys(recipe).contains(`strIngredients${i}`)) return (<li>{recipe[0][`strIngredient${i}`]}</li>)
    // }

    // const ingredientsParser = (recipe) => {
    //     const listElements = []

    //     for (let i = 1; i <= 20; i++) {
    //         const ingredient = recipe[0][`strIngredient${i}`]
    //         if (!ingredient) break
    //         listElements.push(
    //             <li key={i}>{ingredient}</li>
    //         )
    //     }

    //     return listElements
    // }

    useEffect(() => {
        const fetchRecipe = async () => {
            const [data, error] = await handleFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            if (data) setRecipe(data.meals)
            if (error) setError(error.message)
        }
        fetchRecipe();
    }, [])

    if (!recipe || recipe.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="recipe-container">
            <h1>{recipe[0].strMeal}</h1>
            
            <img id="picture" src={recipe[0].strMealThumb} alt="meal-pic" />
            <p>Instructions:</p>
            <p id="instructions">{recipe[0].strInstructions}</p>
        </div>
    )
}

export default RecipeDetails