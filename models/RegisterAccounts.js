import mongoose from "mongoose";

const registerUsersSchema = new mongoose.Schema({
  employeeId: String,
  username: String,
  passwordHash: String,
  name: String,
  contact: String,
  email: String,
  position: String ,



  // photoInfo: {
  //   url: String,
  //   filename: String,
  // },



  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RegisterAccounts',
  },
});

registerUsersSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
})

const Registered = mongoose.model('RegisteredAccounts', registerUsersSchema);

export default Registered;