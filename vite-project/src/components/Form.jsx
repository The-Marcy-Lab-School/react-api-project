import React from 'react'
import {useState} from 'react'

const mealForm = () => {
    const [form, setForm ] = useState([])
    const [budget, setBudget] = useState(300)

    const handleBudgetChange = (e) => {
        setBudget(parseInt(e.target.value))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            mealType: e.target['meal-type'].value,
            dietary: e.target.Dietary.value,
            allergies: e.target.allergies.value,
            budget: budget
        };
        setForm(formData);
        console.log("Form submitted:", form);
    }
   

  return (
    <form id="mealForm" onSubmit={handleSubmit}>
        <h1>Prefrences</h1>
        <input type="text" id="name" placeholder="What's your name?" ></input>
       
        <div>
            <select name="meal-type" id="meal-type"> Meal Type Prefrences
                <label htmlFor="meal-type"></label>
                <option value="braekfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            
            </select>

            
            <select name="Dietary" id="Dietary">
            <label for="food pref">Dietary Restrictions</label>
                <option value="vegan">Vegan</option>
                <option value="gluten">Gluten-Free</option>
                <option value="vege">Vegetarian</option>
            </select>
            
            <select name="allergies" id="allergies">
            <label htmlFor="allergies">Allergies</label>
                <option value="nuts">Nuts</option>
                <option value="dairy">Dairy</option>
                <option value="eggs">Eggs</option>
            </select>

            <label htmlFor="budgetRange">Budget Range</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={budget}
                    onChange={handleBudgetChange}
                    className="budget-range"
                    id="budgetRange"
                />
                <div className="budget-value">${budget}</div>
            </div>
            <button type="submit">Submit</button>
    </form>
      
      
  
  )
}

export default mealForm
