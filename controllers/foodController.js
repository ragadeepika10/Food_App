const foodModel = require('../models/foodmodel');

// Renders the dropdown form for selecting a day
exports.renderForm = (req, res) => {
    res.render('index', { food: null, day: null });  // Pass null for food and day initially
};

// Handles the form submission and returns food for the selected day
exports.getFood = (req, res) => {
    const selectedDay = req.body.day;  // Extracting the selected day from form
    const food = foodModel.getFoodForDay(selectedDay);  // Get food based on day
    res.render('index', { food: food, day: selectedDay });  // Pass both food and day to the view
};
