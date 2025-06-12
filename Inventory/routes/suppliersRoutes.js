import express from 'express';
import { addSupplier,getSuppliers,updateSupplier,deleteSupplier } from '../controllers/suppliersController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getSuppliers);
router.post('/add', authMiddleware, addSupplier);
router.put('/:id', authMiddleware, updateSupplier);
router.delete('/delete/:id', authMiddleware, deleteSupplier);

export default router;
