const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    cuisine: { type: String, required: true },
    notes: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
});

module.exports = mongoose.model('Recipe', RecipeSchema);
