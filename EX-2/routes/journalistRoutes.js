import express from 'express';
import journalistController from '../controllers/journalistController.js';
import articleController from '../controllers/articleController.js';

const router = express.Router();

router.get('/', journalistController.getAllJournalists);
router.get('/:id', journalistController.getJournalist);
router.post('/', journalistController.createJournalist);
router.put('/:id', journalistController.updateJournalist);
router.delete('/:id', journalistController.deleteJournalist);
router.get('/:id/articles', articleController.getArticlesByJournalist);

export default router;