import express from 'express';
import {
  createHealthPlan,
  getAllHealthPlans,
  getHealthPlanById,
  updateHealthPlan,
  deleteHealthPlan,
} from '../controllers/healthPlanController.js';

const router = express.Router();

router.post('/', createHealthPlan);
router.get('/', getAllHealthPlans);
router.get('/:id', getHealthPlanById);
router.put('/:id', updateHealthPlan);
router.delete('/:id', deleteHealthPlan);

export default router;
