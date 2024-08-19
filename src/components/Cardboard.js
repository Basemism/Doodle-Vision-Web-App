import React from 'react';
import './Cardboard.css'

const Cardboard = ({ guesses, prompt }) => {
  const found = guesses.findIndex(guess => guess.className === prompt);

  return (
    <div className="cardboard-container">
      <div className="cardboard">
        <h2>Top 5 Guesses:</h2>
        <ol>
          {guesses.map((guess, index) => (
            <li key={index}>
              {guess.className} - {Math.round(guess.probability * 100)}%
            </li>
          ))}
        </ol>
        <h3>
          {found !== -1 
            ? `Model detected in ${found + 1} guess${found === 0 ? '!' : 'es!'}` 
            : `Model didn't understand your drawing`}
        </h3>
      </div>
    </div>
  );
};

export default Cardboard;