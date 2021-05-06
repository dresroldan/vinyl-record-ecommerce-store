import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById } from '../controllers/orderController.js';

router.route('/').post(addOrderItems);
router.route('/:id').get(getOrderById);

export default router;
