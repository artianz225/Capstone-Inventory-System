import purchasesAmountService from '../services/purchasesAmountService.js'

function getAllPuchasesAmount(_req, res) {
  purchasesAmountService.getAllPuchasesAmount().then((result) => res.json(result));
}

function getSinglePurchaseAmount(req, res, next) {
  const id = (req.params.id);
  purchasesAmountService.getSinglePurchaseAmount(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function updatePurchaseAmount(req, res, next) {
  const id = req.params.id;
  const { month, amount } = req.body
  
  const updatedPurchaseAmount = {
    month,
    amount, 
  };

  purchasesAmountService.updatePurchaseAmount(id, updatedPurchaseAmount)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

export default { getAllPuchasesAmount, getSinglePurchaseAmount, updatePurchaseAmount }