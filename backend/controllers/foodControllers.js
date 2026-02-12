let foodItems = [
    { id: 1, name: "Sushi", price: 67.99},
    { id: 2, name: "Pizza", price: 67.99,}
];

exports.getAllFoods = (req, res) => {
    res.json(foodItems);
};


exports.createFood = (req, res) => {
    const { name, price } = req.body;
    
    const newFood = {
        id: foodItems.length + 1,
        name: name || "Unknown Item",
        price: price || 0,
    };

    foodItems.push(newFood);
    res.send(`Food item '${name}' added successfully!`);
};