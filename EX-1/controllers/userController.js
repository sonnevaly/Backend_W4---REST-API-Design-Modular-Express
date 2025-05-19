import * as userModel from '../models/userModel.js';

export const getAllUsers = (req, res) => {
    const users = userModel.getUsers();
    res.json(users);
};

export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userModel.getUserById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = userModel.createUser(name, email);
    res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = userModel.updateUser(userId, { name, email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const deleted = userModel.deleteUser(userId);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};