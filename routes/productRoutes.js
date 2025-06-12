import express from "express";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getProducts);
router.post("/add", authMiddleware, addProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, deleteProduct);



export default router;
