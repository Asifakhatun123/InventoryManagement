
import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import validate from '../middleware/validate.js';
import { userCreateSchema, userUpdateSchema } from '../validations/userValidation.js';

const router = express.Router();


router.get("/", authMiddleware, getAllUsers);
router.post("/", authMiddleware, validate(userCreateSchema), createUser);
router.put("/:id", authMiddleware, validate(userUpdateSchema), updateUser);
router.delete("/:id", authMiddleware, deleteUser);

export default router;

