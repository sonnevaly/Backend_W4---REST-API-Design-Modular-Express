import express from 'express';
import articleController from '../controllers/articleController.js';

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticle);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);
router.get('/journalist/:id', articleController.getArticlesByJournalist);
router.get('/category/:id', articleController.getArticlesByCategory);

export default router;