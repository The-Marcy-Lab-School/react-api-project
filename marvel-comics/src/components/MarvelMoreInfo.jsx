import React, { useState } from 'react';

const CharacterDescription = ({ description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <div className="character-description">
      <button onClick={toggleDescription}>
        {showDescription ? `Hide Description` : `Show Description`}
      </button>
      {showDescription && (
        <h2>{description || `No description available`}</h2>
      )}
    </div>
  );
};
export default CharacterDescription;