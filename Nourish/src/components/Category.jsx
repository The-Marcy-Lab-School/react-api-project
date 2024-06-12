import React from 'react';
import { useContext, useState, useEffect } from 'react';
import NourishContext from '../context/NourishContext';
import { useParams } from "react-router-dom";
import MealList from './MealList'
import { handleFetch } from '../utils';

const Category = () => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { categories } = useContext(NourishContext);

    useEffect(() => {
        const fetchMeals = async () => {
            const [data, error] = await handleFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[id - 1].strCategory}`);
                 console.log("data:", data.meals)
                if (data) setMeals(data.meals)
                if (error) setError(error.message)
        }
        fetchMeals();
    }, [id]);

    // console.log('meals', meals)

    if (error) return "Can't fetch meals"

    if (!categories || categories.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <h1 className="categoryPage-title">Here are all of your { categories[id - 1].strCategory } meals</h1>
            <MealList meals={meals} />
        </div>
    )
}

export default Category