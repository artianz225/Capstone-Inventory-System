import mongoose from "mongoose";

const suppliersSchema = new mongoose.Schema({
  supplierCode: { type: String},
  company: { type: String},
  contactPerson: { type: String},
  address: { type: String},
  email: { type: String},
  status: { type: String},
  description: { type: String},
  contactNumber: { type: String},
});

suppliersSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const Suppliers = mongoose.model('Suppliers', suppliersSchema);

export default Suppliers;