const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config');

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
