import mongoose from "mongoose";

const registerUsersSchema = new mongoose.Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true, minLength: 6, },
});

registerUsersSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const Registered = mongoose.model('RegisteredAccounts', registerUsersSchema);

export default Registered;