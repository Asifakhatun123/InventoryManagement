import express from 'express'
import { addCategory, deleteCategory, getCategories, updateCategory } from '../controllers/categoryController.js';
import authMiddleware from '../middleware/authMiddleware.js';



const router= express.Router();
router.post("/add",authMiddleware, addCategory)
router.get("/",authMiddleware, getCategories)
router.put("/:id",authMiddleware, updateCategory)
router.delete("/delete/:id",authMiddleware, deleteCategory)

export default router;