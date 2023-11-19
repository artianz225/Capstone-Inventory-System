import purchasesAmount from '../models/purchasesAmount.js'

function getAllPurchasesAmount() {
  return purchasesAmount.find({}).then((result) => result);
}

function getSinglePurchasesAmount(id) {
  return purchasesAmount.findById(id).then(result => result)
}

function updatePurchasesAmount(id, updatedData) {
  return purchasesAmount.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

function createPurchasesAmount( { month, amount } ) {  
  return purchasesAmount.create(
    {
      month,
      amount,
    }).then((createdPurchasesAmount) => createdPurchasesAmount)
}

export default { getAllPurchasesAmount, getSinglePurchasesAmount, updatePurchasesAmount, createPurchasesAmount }