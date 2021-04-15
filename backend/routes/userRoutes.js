import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

// Fetch all products
router.post('/login', authUser);

export default router;
