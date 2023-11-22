import express from 'express';
import usersController from '../controllers/usersController.js';
import upload from '../utils/multer.js';

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUSers);
usersRouter.get('/:id', usersController.getUser); 
usersRouter.post('/', upload.single('image'), usersController.createUser);
usersRouter.delete('/:id', usersController.deleteUser); 
usersRouter.put('/:id', usersController.updateUser);

export default usersRouter;