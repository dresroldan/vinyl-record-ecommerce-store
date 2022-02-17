import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';


// Gets all products 
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Gets products a single product by ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export { getProducts, getProductById };
