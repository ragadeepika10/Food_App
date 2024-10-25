const foodForDays = {
    Monday: ['Pasta', 'Salad', 'Curry'],
    Tuesday: ['Pizza', 'Burger', 'Sushi'],
    Wednesday: ['Steak', 'Tacos', 'Noodles'],
    Thursday: ['Sandwich', 'Soup', 'Fried Rice'],
    Friday: ['BBQ', 'Burrito', 'Falafel'],
    Saturday: ['Ramen', 'Kebab', 'Wraps'],
    Sunday: ['Pancakes', 'Waffles', 'Omelette']
};

// Function to return random food for the selected day
exports.getFoodForDay = (day) => {
    const foods = foodForDays[day];  // Get the array of foods for the day
    const randomIndex = Math.floor(Math.random() * foods.length);  // Get random food
    return foods[randomIndex];  // Return the randomly selected food
};
