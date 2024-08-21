// src/App.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import fetchData from './components/Fetch.jsx'; // Adjust the import path as needed
import { API_KEY, HASH } from './config.js';
import MarvelSearch from './components/MarvelSearch'; // Ensure this component is correctly imported
import CharacterDescription from './components/MarvelMoreInfo';
import './App.css';

// Create the context
const CharacterContext = createContext();

const App = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('Doctor Strange'); // Default query
  const [loading, setLoading] = useState(false); // Add loading state

  const API_URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&name=${query}`;


  //try-catch- finally structure
  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true); // Set loading to true when starting fetch
      try {
        const data = await fetchData(API_URL);
        console.log(data);
        if (data.data.results.length > 0) {
          setCharacter(data.data.results[0]); // Display the first result
          setError(''); // Clear any previous errors
        } else {
          setCharacter(null); // Clear character if no results found
        }
      } catch (error) {
        setError(error.message);
        setCharacter(null); // Ensure character is null on error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchCharacter();
  }, [query]); // Fetch new data when query changes

  const searchCharacter = (newQuery) => {
    setQuery(newQuery.trim());
  };

  return (
    <CharacterContext.Provider value={{ character, error, searchCharacter, }}>
      <div className="homepage">
        <h1 className="title">Marvel API React</h1>
        <MarvelSearch /> {/* Use MarvelSearch to handle the search */}
        {loading && <p>Loading in progress...</p>} {/* Display loading message */}
        {error && <p className="error">{error}</p>} {/* Render error message if there's an error */}
        {!loading && !error && !character && <p>No character found</p>} {/* Display if no character is found */}
        {character && (
          <div className="character-card">
            <h2 className="character-title">{character.name}</h2>
            <img 
              className="character-image"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
           <CharacterDescription />
          </div>
        )}
      </div>
    </CharacterContext.Provider>
  );
};

// Create a custom hook to use the CharacterContext
const useCharacter = () => useContext(CharacterContext);

export default App;
export { useCharacter };
