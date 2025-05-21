let categories = [
    { id: 1, name: "Politics" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Sports" },
];

const getAllCategories = () => categories;
const getCategoryById = (id) => categories.find(c => c.id === parseInt(id));
const createCategory = (categoryData) => {
    const newCategory = { id: categories.length + 1, ...categoryData };
    categories.push(newCategory);
    return newCategory;
};
const updateCategory = (id, categoryData) => {
    const category = categories.find(c => c.id === parseInt(id));
    if (!category) return null;
    Object.assign(category, categoryData);
    return category;
};
const deleteCategory = (id) => {
    const index = categories.findIndex(c => c.id === parseInt(id));
    if (index === -1) return null;
    return categories.splice(index, 1)[0];
};

export default {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};