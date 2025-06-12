
// export default router;
import express from 'express';
import { createOrder, getAllOrders } from '../controllers/orderController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getAllOrders);

export default router;
