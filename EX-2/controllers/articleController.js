import articleModel from '../models/articleModel.js';

const getAllArticles = (req, res) => res.json(articleModel.getAllArticles());
const getArticle = (req, res) => {
    const article = articleModel.getArticleById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};
const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newArticle = articleModel.createArticle({ title, content, journalistId, categoryId });
    res.status(201).json(newArticle);
};
const updateArticle = (req, res) => {
    const article = articleModel.updateArticle(req.params.id, req.body);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};
const deleteArticle = (req, res) => {
    const deletedArticle = articleModel.deleteArticle(req.params.id);
    if (!deletedArticle) return res.status(404).json({ error: 'Article not found' });
    res.status(204).send();
};
const getArticlesByJournalist = (req, res) => {
    const articles = articleModel.getArticlesByJournalist(req.params.id);
    res.json(articles);
};
const getArticlesByCategory = (req, res) => {
    const articles = articleModel.getArticlesByCategory(req.params.id);
    res.json(articles);
};

export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticlesByJournalist,
    getArticlesByCategory,
};