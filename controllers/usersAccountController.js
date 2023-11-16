import registrationService from '../services/userService.js';

function getAllRegisteredUSers(req, res) {
  registrationService.getAllRegisteredUSers().then((result) => res.json(result));
}

function getRegisteredUser(req, res, next) {
  const id = (req.params.id);
  registrationService.getRegisteredUser(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function userRegistration(req, res, next) {
  const body = req.body;
  registrationService
  .userRegistration(body)
  .then((createdUser) => res.json(createdUser))
  .catch((error) => next(error));
}

function deleteUserAccount(req, res, next) {
    const id = req.params.id;
    registrationService.deleteUserAccount(id).then((_status) => res.status(204).end())
    .catch((error) => next(error))
}

function updateUserAccount(req, res, next) {
  const id = req.params.id;
  const { username, password} = req.body
  
  const updatedUSer = {
    username,
    password
  };

  registrationService
  .updateUserAccount(id, updatedUSer)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

export default {
  getAllRegisteredUSers,
  getRegisteredUser,
  userRegistration,
  deleteUserAccount,
  updateUserAccount
};