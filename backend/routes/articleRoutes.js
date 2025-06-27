import express from 'express';
import {
  createArticle,
  getAllArticles,
  getArticleById,
  deleteArticle,
} from '../controllers/articleController.js';

const router = express.Router();

router.post('/', createArticle);
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.delete('/:id', deleteArticle);

export default router;
