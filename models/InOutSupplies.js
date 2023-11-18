import mongoose from "mongoose";

const inOutSuppliesSchema = new mongoose.Schema({
  month: { type: String},
  inSupply: { type: String},
  outSupply: { type: String},
});

inOutSuppliesSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const InOutSupplies = mongoose.model('InOutSupplies', inOutSuppliesSchema);

export default InOutSupplies;