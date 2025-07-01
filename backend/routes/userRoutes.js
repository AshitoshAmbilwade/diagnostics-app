import express from 'express';
import {
  registerUser,
  loginUser,         // ✅ import the login controller
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getCurrentUser
} from '../controllers/userController.js';
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Auth Routes
router.post('/register', registerUser);
router.post('/login', loginUser);  // ✅ Login route added
router.get("/me", protect, getCurrentUser); // ✅ new route

// ✅ CRUD Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
