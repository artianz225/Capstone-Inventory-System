import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  employeeId: String,
  username: String,
  passwordHash: String,
  name: String,
  contact: String,
  email: String,
  position: String ,
  photoInfo: {
    url: String,
    filename: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

usersSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
})

const Users = mongoose.model('Users', usersSchema);

export default Users;