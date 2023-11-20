import Registered from '../models/RegisterAccounts.js';
import bcrypt from 'bcrypt';

function getAllRegisteredUSers() {
  return Registered.find({}).then((result) => result);
}

function getRegisteredUser(id) {
  return Registered.findById(id).then(result => result)
}

async function userRegistration( {  employeeId, name, contact, email, position, username, password} ) {  
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  return Registered.create(
    {
      employeeId,
      name,
      contact,
      email,
      position,
      username,
      passwordHash
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