import express from 'express';
import {
  registerUser,
  loginUser,         // ✅ import the login controller
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// ✅ Auth Routes
router.post('/register', registerUser);
router.post('/login', loginUser);  // ✅ Login route added

// ✅ CRUD Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
