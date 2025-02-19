import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/all`);
        const data = await response.json();
        setRecipes(data);

        if (id) {
          const recipe = data.find((r) => r._id === id);
          setSelectedRecipe(recipe);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [id]);

  if (id && selectedRecipe) {
    return (
      <div className="recipe-details">
        <h1>{selectedRecipe.title}</h1>
        <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
        <p><strong>Cuisine:</strong> {selectedRecipe.cuisine}</p>
        <p><strong>Notes:</strong> {selectedRecipe.notes}</p>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <h1>All Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Notes:</strong> {recipe.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
