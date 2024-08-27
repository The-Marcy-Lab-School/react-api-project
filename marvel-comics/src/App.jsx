import { useState, useEffect, createContext, useContext } from 'react';
import { API_KEY, HASH } from './config.js';
import fetchData from './components/Fetch.jsx';
//////
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
///////
import About from './pages/About';
import NavBar from './components/NavBar';
import './App.css';
///////
import MarvelSearch from './components/MarvelSearch'; // Ensure this component is correctly imported
import CharacterDisplay from './components/CharacterDisplay'; // Import the CharacterDisplay component

// Create the context
const CharacterContext = createContext();

const App = () => {
  const [characters, setCharacters] = useState([]); // Change to an array to hold multiple characters
  const [error, setError] = useState('');

  return (
    <BrowserRouter>
      <CharacterContext.Provider value={{ characters, error, setCharacters, setError }}>
        <div className="main-content">
          <NavBar />
          {/* Using a nav bar in react */}
          {/* "/" is home page */}
          <Routes >
            <Route path="/pages/about" element={<About />}> </Route>
            <Route path="/" element={<MarvelSearch />}> </Route>
          </Routes>
        </div>
      </CharacterContext.Provider>
    </BrowserRouter>
  );
};

// Create a custom hook to use the CharacterContext
const useCharacter = () => useContext(CharacterContext);

export default App;
export { useCharacter }
