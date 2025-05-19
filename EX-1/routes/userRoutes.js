import express from 'express';
import * as userController from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validateUser, userController.createUser);
router.put('/:id', validateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;