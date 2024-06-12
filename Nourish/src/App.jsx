import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Category from './components/Category';
import './App.css'
import RecipeDetails from './components/RecipeDetails';

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/recipe-details/:id' element={<RecipeDetails />}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  )
}

export default App