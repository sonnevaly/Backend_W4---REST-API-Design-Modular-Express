import express from 'express';
import categoryController from '../controllers/categoryController.js';
import articleController from '../controllers/articleController.js';

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);
router.get('/:id/articles', articleController.getArticlesByCategory);

export default router;