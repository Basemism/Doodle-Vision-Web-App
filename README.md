# Doodle Vision

Doodle Vision is a mini-project aimed to replicate Google's Quick, Draw Game. Project Consists of 2 parts, [training a model](https://github.com/Basemism/Doodle_Vision_Classifier) capable of classifying various doodles, and the web application . The web application allows users to draw a prompt, which is then sent to the deep learning model for prediction. The model returns the top 5 guesses, and the application displays whether the model correctly identified the drawing. 

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Model](#model)
- [Installation](#installation)
- [Future Improvements](#future-improvements)

## Features
- **Drawing Canvas:** Allows users to draw sketches based on a given prompt using the `react-sketch-canvas` library.
- **Real-time Predictions:** The model provides live feedback after each stroke.
- **Prediction Feedback:** Displays the top 5 guesses from the model.

## Tech Stack
- **Frontend:** React, `react-sketch-canvas`
- **Backend:** Python, Flask
- **Machine Learning:** PyTorch, ResNet-18 architecture

## Model
The classifier utilises ResNet-18 trained on 23 classes with 3000 images per class. After 10 epochs (due to limitied hardware capacity),the model achieved a validation accuracy of 88.15%. 

The dataset used for training the model is sourced from [Kaggle's Doodle Dataset](https://www.kaggle.com/datasets/ashishjangra27/doodle-dataset).

## Installation

### Steps
1. **Start the React frontend:**
    ```bash
    cd src/
    npm start
    ```
2. **Start the backend server (for model predictions):**
    ```bash
    cd backend/
    python prediction_model_server.py
    ```
    
## Future Improvements
- Utilize entire dataset during training phase.
- Experiment with deeper archtectures. 
- Set up live guesses, akin to Quick! Draw by Google 
