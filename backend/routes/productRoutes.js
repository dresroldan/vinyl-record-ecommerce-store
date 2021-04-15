import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

// Fetch all products
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
