import mongoose from "mongoose";

const purchasesAmountSchema = new mongoose.Schema({
  month: { type: String},
  amount: { type: String},
});

purchasesAmountSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const PurchasesAmount = mongoose.model('PurchasesAmount', purchasesAmountSchema);

export default PurchasesAmount;