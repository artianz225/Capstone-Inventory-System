import PurchasesAmount from '../models/PurchasesAmount.js'

function getAllPurchasesAmount() {
  return PurchasesAmount.find({}).then((result) => result);
}

function getSinglePurchaseAmount(id) {
  return PurchasesAmount.findById(id).then(result => result)
}

function updatePurchaseAmount(id, updatedData) {
  return PurchasesAmount.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

export default { getAllPurchasesAmount, getSinglePurchaseAmount, updatePurchaseAmount }