const { Restaurant } = require('../Restaurants/restraurants.entity');

// Create Project
const createRestaurant = async (req, res) => {
    try {
        const { image , certificate , nameuz , siteLink , instagram , facebook , telegram } = req.body;
        const newRestaurant = new Restaurant({ image , certificate , nameuz , siteLink , instagram , facebook , telegram  });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Projects
const getAllRestaurants = async (req, res) => {
    try {
        const restraurants = await Restaurant.find();
        res.status(200).json(restraurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createRestaurant, getAllRestaurants };
