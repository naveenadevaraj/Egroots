const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ id: id }); // Or Product.findById(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch similar products based on category
router.get('/similar/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const similarProducts = await Product.find({ category: new RegExp(category, 'i') }).limit(5);
        res.json(similarProducts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


// Post all Products
router.post("/bulk", async (req, res) => {
    try {
        const products = req.body; // Expecting an array of products
        await Product.insertMany(products);
        res.status(201).json({ message: "Products added successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE request to delete a product by its ID
router.delete('/:id', async (req, res) => {
    try {
      const productId = req.params.id;  // Get the product ID from the URL
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting product', error: err });
    }
  });

// PUT endpoint to update product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { image } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { image }, // Update only the image field
            { new: true } // Return the updated document
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update the product.' });
    }
});


module.exports = router;
