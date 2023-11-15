import express from 'express';
import usersAccountController from '../controllers/usersAccountController.js';

const registrationRouter = express.Router();

registrationRouter.get('/', usersAccountController.getAllRegisteredUSers);
registrationRouter.get('/:id', usersAccountController.getRegisteredUser); 
registrationRouter.post('/', usersAccountController.userRegistration);
registrationRouter.delete('/:id', usersAccountController.deleteUserAccount); 
registrationRouter.put('/:id', usersAccountController.updateUserAccount);
  


export default registrationRouter;