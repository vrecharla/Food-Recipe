const express = require('express');
const Recipe = require('../models/Recipe');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new recipe
router.post('/add', authMiddleware, async (req, res) => {
    const { title, ingredients, cuisine, notes } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            ingredients,
            cuisine,
            notes,
            user: req.user.id
        });

        await newRecipe.save();
        res.status(201).json({ message: 'Recipe added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all recipes
router.get('/all', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
