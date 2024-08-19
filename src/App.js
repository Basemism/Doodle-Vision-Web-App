import React, { useState } from 'react';
import axios from 'axios';
import Canvas from './components/Canvas';
import NavBar from './components/NavBar';
import Prompt from './components/Prompt';
import Cardboard from './components/Cardboard';
import { classes } from './components/ClassList';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState(classes[0]);
  const [guesses, setGuesses] = useState([]);
  
  const handleSubmit = async (dataURL) => {
    try {
      const response = await axios.post('http://127.0.0.1:12345/predict', { image: dataURL });
      const top5Guesses = response.data.guesses.map(indexProbabilityPair => ({
        className: classes[indexProbabilityPair.index],
        probability: indexProbabilityPair.probability,
      }));
      setGuesses(top5Guesses);
    } catch (error) {
      console.error('Error predicting the drawing:', error);
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * classes.length);
    setPrompt(classes[randomIndex]);
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Prompt text={prompt} onShuffle={handleShuffle} />
        <Canvas onSubmit={handleSubmit}/>
        {guesses.length > 0 && <Cardboard guesses={guesses} prompt={prompt} />}
      </header>
    </div>
  );
}




export default App;
