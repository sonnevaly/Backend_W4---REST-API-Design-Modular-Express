import journalistModel from '../models/journalistModel.js';

const getAllJournalists = (req, res) => res.json(journalistModel.getAllJournalists());
const getJournalist = (req, res) => {
    const journalist = journalistModel.getJournalistById(req.params.id);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};
const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });
    const newJournalist = journalistModel.createJournalist({ name, email });
    res.status(201).json(newJournalist);
};
const updateJournalist = (req, res) => {
    const journalist = journalistModel.updateJournalist(req.params.id, req.body);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};
const deleteJournalist = (req, res) => {
    const deletedJournalist = journalistModel.deleteJournalist(req.params.id);
    if (!deletedJournalist) return res.status(404).json({ error: 'Journalist not found' });
    res.status(204).send();
};

export default {
    getAllJournalists,
    getJournalist,
    createJournalist,
    updateJournalist,
    deleteJournalist,
};