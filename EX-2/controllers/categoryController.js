import categoryModel from '../models/categoryModel.js';

const getAllCategories = (req, res) => res.json(categoryModel.getAllCategories());
const getCategory = (req, res) => {
    const category = categoryModel.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};
const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const newCategory = categoryModel.createCategory({ name });
    res.status(201).json(newCategory);
};
const updateCategory = (req, res) => {
    const category = categoryModel.updateCategory(req.params.id, req.body);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};
const deleteCategory = (req, res) => {
    const deletedCategory = categoryModel.deleteCategory(req.params.id);
    if (!deletedCategory) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
};

export default {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};