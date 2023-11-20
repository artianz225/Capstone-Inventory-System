import express from 'express';
import usersAccountController from '../controllers/usersAccountController.js';
import upload from '../utils/multer.js';

const registrationRouter = express.Router();

registrationRouter.get('/', usersAccountController.getAllRegisteredUSers);
registrationRouter.get('/:id', usersAccountController.getRegisteredUser); 
registrationRouter.post('/', upload.single('image'), usersAccountController.userRegistration);
registrationRouter.delete('/:id', usersAccountController.deleteUserAccount); 
registrationRouter.put('/:id', usersAccountController.updateUserAccount);

export default registrationRouter;