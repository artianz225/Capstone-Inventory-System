import Users from '../models/users.js';
import bcrypt from 'bcrypt';

function getAllUsers() {
  return Users.find({}).then((result) => result);
}

function getUser(id) {
  return Users.findById(id).then(result => result)
}

async function createUser( {  employeeId, name, contact, email, position, username, password, photoInfo } ) {  
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  return Users.create({
      employeeId,
      name,
      contact,
      email,
      position,
      username,
      passwordHash,
      photoInfo,


  }).then((createdUser) => createdUser)
}

function deleteUser(id) {
  return Users.findByIdAndDelete(id).then((returnedSatus) => returnedSatus);
}

function updateUser(id, updatedData) {
  return Users.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

export default {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}