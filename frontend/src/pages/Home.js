import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
const Home = () => {
  return (
    <div>
      <h1>Welcome to Recipe Book</h1>
      <p>Discover amazing recipes and share your own!</p>
      <Link to="/add-recipe"><button>Add Recipe</button></Link>
      <RecipeDetails />
    </div>
  );
};

export default Home;
