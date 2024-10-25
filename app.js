const express = require('express');
const app = express();
const foodRoutes = require('./routes/foodRoutes');

// Setting up EJS as the view engine
app.set('view engine', 'ejs');

// Body parser to handle form submissions
app.use(express.urlencoded({ extended: true }));

// Using routes
app.use('/', foodRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});