// src/components/MarvelSearch.jsx
import React from 'react';
import { useCharacter } from '../App'; // Adjust the import path as needed

const MarvelSearch = () => {
    const { searchCharacter } = useCharacter();

    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.elements.query.value;
        searchCharacter(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input className="inputBar" type="text" name="query" placeholder="Search for a character" />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};

export default MarvelSearch;
