// src/components/Cardboard.js
import React from 'react';

const Cardboard = ({ guesses, prompt }) => {
  const found = guesses.findIndex(guess => guess.className === prompt);

  return (
    <div className="cardboard">
      <h2>Top 5 Guesses:</h2>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>
            {index + 1}. {guess.className} - {Math.round(guess.probability * 100)}%
          </li>
        ))}
      </ul>
      <h3>
        {found !== -1 
          ? `Model detected in ${found + 1} guess${ found == 0 ? '!' : 'es!'}` 
          : `Model didn't understand your drawing`}
      </h3>
    </div>
  );
};

export default Cardboard;
