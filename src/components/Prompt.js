import React from 'react';
import './Prompt.css';
import { FaShuffle } from 'react-icons/fa6'; 

const Prompt = ({ text, onShuffle }) => {
  const vowelRegex = '^[aieouAIEOU].*'; // Does text start with a vowel?
  const theRegex = '^the\\s+'; // Does text start with 'the'?

  const getArticle = (word) => {
    if (word.match(theRegex)) {
      return ''; 
    } else if (word.match(vowelRegex)) {
      return 'an';
    } else {
      return 'a';
    }
  };

  return (
    <div className="prompt-container">
      <h3 className='prompt'>
        Draw {getArticle(text)} {text}!
      </h3>
      <button className="shuffle-button" onClick={onShuffle} aria-label="Shuffle Prompt">
        <FaShuffle />
      </button>
    </div>
  );
};

export default Prompt;