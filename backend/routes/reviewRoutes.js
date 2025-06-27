import express from 'express';
import {
  createReview,
  getAllReviews,
  getReviewsByDoctor,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/doctor/:doctorId', getReviewsByDoctor);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
