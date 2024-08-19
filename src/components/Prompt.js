import React from 'react';
import './Prompt.css';
import { FaShuffle } from 'react-icons/fa6'; 

const Prompt = ({ text, onShuffle }) => {
  const vowelRegex = '^[aieouAIEOU].*';

  return (
    <div className="prompt-container">
      <h3 className='prompt'>
        Draw {text.match(vowelRegex) ? 'an' : 'a'} {text}!
      </h3>
      <button className="shuffle-button" onClick={onShuffle} aria-label="Shuffle Prompt">
        <FaShuffle />
      </button>
    </div>
  );
};

export default Prompt;