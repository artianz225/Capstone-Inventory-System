import purchasesAmountService from '../services/purchasesAmountService.js'

function getAllPurchasesAmount(_req, res) {
  purchasesAmountService.getAllPurchasesAmount().then((result) => res.json(result));
}

function getSinglePurchasesAmount(req, res, next) {
  const id = (req.params.id);
  purchasesAmountService.getSinglePurchasesAmount(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function updatePurchasesAmount(req, res, next) {
  const id = req.params.id;
  const { month, amount } = req.body
  
  const updatedPurchaseAmount = {
    month,
    amount, 
  };

  purchasesAmountService.updatePurchasesAmount(id, updatedPurchaseAmount)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

function createPurchaseAmount(req, res, next) {
  const body = req.body;
  purchasesAmountService.createPurchasesAmount(body)
  .then((createSupplier) => res.json(createSupplier))
  .catch((error) => next(error))
}

export default { getAllPurchasesAmount, getSinglePurchasesAmount, updatePurchasesAmount, createPurchaseAmount }