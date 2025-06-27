import express from 'express';
import {
  createSurgery,
  getAllSurgeries,
  getSurgeryById,
  updateSurgery,
  deleteSurgery
} from '../controllers/surgeryController.js';

const router = express.Router();

router.post('/', createSurgery);
router.get('/', getAllSurgeries);
router.get('/:id', getSurgeryById);
router.put('/:id', updateSurgery);
router.delete('/:id', deleteSurgery);

export default router;
