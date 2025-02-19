import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', cuisine: '', notes: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please log in to add a recipe.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipe),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Recipe Added Successfully!');
        setRecipe({ title: '', ingredients: '', cuisine: '', notes: '' });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={recipe.title} onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
        <textarea placeholder="Ingredients" value={recipe.ingredients} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}></textarea>
        <input type="text" placeholder="Cuisine" value={recipe.cuisine} onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })} />
        <textarea placeholder="Preparation Notes" value={recipe.notes} onChange={(e) => setRecipe({ ...recipe, notes: e.target.value })}></textarea>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default AddRecipe;