const Food = require('../models/Food');

exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFood = async (req, res) => {
    try {
        const { name, price, category, description } = req.body;
        
        const newFood = new Food({
            name,
            price,
            category,
            description
        });

        await newFood.save();
        res.status(201).send(`Food item '${name}' saved to MongoDB!`);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};