import express from 'express';
import {
  createTest,
  getAllTests,
  getTestById,
  updateTest,
  deleteTest
} from '../controllers/testController.js';

const router = express.Router();

// Routes
router.post('/', createTest);
router.get('/', getAllTests);
router.get('/:id', getTestById);
router.put('/:id', updateTest);
router.delete('/:id', deleteTest);

export default router;
