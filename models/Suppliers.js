import mongoose from "mongoose";

const suppliersSchema = new mongoose.Schema({
  supplierCode: String,
  company: String,
  contactPerson: String,
  address: String,
  email: String,
  status: String,
  description: String,
  contactNumber: String
});

suppliersSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const suppliers = mongoose.model('Suppliers', suppliersSchema);

export default suppliers;