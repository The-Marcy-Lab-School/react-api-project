import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

const MealList = ({ meals }) => {
    const { id } = useParams()

    if (!meals) {
        return <div>Loading...</div>;
    }

    console.log('meals', meals)

    let navigate = useNavigate();

    const handleClick = async (idMeal) => {
        let path = `/recipe-details/${idMeal}`;
        navigate(path);
    }

    return (
        <div className='container'>
            
            {
                meals.map(meal => (
                    <div key={meal.idMeal} onClick={() => handleClick(meal.idMeal)} className='card'>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <div className='card-body'>
                            <h5 className='card-title'>{meal.strMeal}</h5>
                        </div>
                    </div>
                ))
            }
          
        </div>
    )
}

export default MealList;