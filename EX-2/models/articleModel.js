let articles = [
    { id: 1, title: "Election Results 2025", content: "The final results of the 2025 elections are out...", journalistId: 1, categoryId: 1 },
    { id: 2, title: "New Smartphone Breakthrough", content: "A revolutionary phone with foldable glass has been released...", journalistId: 2, categoryId: 2 },
    { id: 3, title: "Champions League Highlights", content: "Here's what you missed in last night's Champions League game...", journalistId: 3, categoryId: 3 },
    { id: 4, title: "Tech Giants Face Congress", content: "Major tech CEOs testify on regulation and privacy...", journalistId: 1, categoryId: 2 },
    { id: 5, title: "Olympics 2028: Cities Shortlisted", content: "These are the cities that made the final cut...", journalistId: 3, categoryId: 3 },
];

const getAllArticles = () => articles;
const getArticleById = (id) => articles.find(a => a.id === parseInt(id));
const createArticle = (articleData) => {
    const newArticle = { id: articles.length + 1, ...articleData };
    articles.push(newArticle);
    return newArticle;
};
const updateArticle = (id, articleData) => {
    const article = articles.find(a => a.id === parseInt(id));
    if (!article) return null;
    Object.assign(article, articleData);
    return article;
};
const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === parseInt(id));
    if (index === -1) return null;
    return articles.splice(index, 1)[0];
};
const getArticlesByJournalist = (journalistId) => articles.filter(a => a.journalistId === parseInt(journalistId));
const getArticlesByCategory = (categoryId) => articles.filter(a => a.categoryId === parseInt(categoryId));

export default {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticlesByJournalist,
    getArticlesByCategory,
};