import registrationService from '../services/userService.js';
import Registered from '../models/RegisterAccounts.js';

function getAllRegisteredUSers(req, res) {
  registrationService.getAllRegisteredUSers().then((result) => res.json(result));
}

function getRegisteredUser(req, res) {
  const id = (req.params.id);
  registrationService.getRegisteredUser(id).then((result) => res.json(result))
  
}

function userRegistration(req, res) {
  registrationService.userRegistration(req.body).then((createdUser) => res.json(createdUser))
}

function deleteUserAccount(req, res) {
    const id = req.params.id;
    registrationService.deleteUserAccount(id).then((status) => res.status(204).end())
}

function updateUserAccount(req, res) {
  const id = req.params.id;
  const updateData = req.body; 

  Registered.findByIdAndUpdate(id, updateData, { new: true })
    .then(updatedRecord => {
      res.json(updatedRecord);
    })
}

export default {
  getAllRegisteredUSers,
  getRegisteredUser,
  userRegistration,
  deleteUserAccount,
  updateUserAccount
};