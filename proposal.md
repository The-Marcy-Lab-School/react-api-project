# Nourish

Created by Tahj Amie and Dominic Tuzo.

## 🚀 Mission statement

Our application, Nourish was created for people looking for something to eat. It allows users to select a meal from a plethora of choices and then provides instructions on how to re-create the meal of their choosing.

## API & React Router

This application will use the theMealDB API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: https://www.themealdb.com/api.php
- https://www.themealdb.com/api/json/v1/1/lookup.php?i=53050
  - Provides a list of meals based on the selected meal's id.
  - Data Values: idMeal, strMeal, strInstructions, strIngredients
- https://www.themealdb.com/api/json/v1/1/categories.php 
  - Provides a list of categories
  - Data Values: idCategory, strCategory
- https://www.themealdb.com/json/v1/1/filter.php?c=Seafood
  - Filters through the specified category
  - Data Values: strMeal, strMealThumb, idMeal

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/` page, users can select for a category for a list of meals.
* On the `/category/:id` page, users can view a grid of all meals specified by a single category.
* On the `/category/:id` page, users can select a single meal.
* On the `/recipe-details/:id` page, users can view instructions for a single meal.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to list all information for each meal
* Users will be able to save favorite meals using local storage
* Users will be able to create a meal plan using a calendar api

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Create a GitHub Organization 
- [ ] Create a Scrum Board with tickets
- [ ] Create the project repo with the project proposal in the markdown
- [ ] Create all files and directories needed

**Day 2**
- [ ] Fetch the categories
- [ ] Fetch the list of meals in each category
- [ ] Fetch the meal data for a single meal

**Day 3** (MVP due by the end of the day)
- [ ] Create the category dropdown 
- [ ] Create meal list for selected category
- [ ] Create page with instructions for the specified meal

**Day 4**
- [ ] Styling and making the website pretty
- [ ] Implementing first stretch feature

**Day 5**
- [ ] Implementing second stretch feature
- [ ] Implementing third stretch feature

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
