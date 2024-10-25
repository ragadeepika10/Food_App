const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Route to render the dropdown form
router.get('/', foodController.renderForm);

// Route to handle form submission and produce food
router.post('/getFood', foodController.getFood);

module.exports = router;