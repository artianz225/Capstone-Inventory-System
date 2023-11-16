import Registered from '../models/RegisterAccounts.js';

function getAllRegisteredUSers() {
  return Registered.find({}).then((result) => result);
}

function getRegisteredUser(id) {
  return Registered.findById(id).then(result => result)
}

function userRegistration( {username, password} ) {  
  return Registered.create(
    {
      username,
      password
    }).then((createdUser) => createdUser)
}

function deleteUserAccount(id) {
  return Registered.findByIdAndDelete(id).then((returnedSatus) => returnedSatus);
}

function updateUserAccount(id, updatedData) {
  return Registered.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

export default {
  userRegistration,
  getRegisteredUser,
  getAllRegisteredUSers,
  deleteUserAccount,
  updateUserAccount
}