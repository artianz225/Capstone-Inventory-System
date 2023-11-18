import inOutSuppliesService from '../services/inOutSuppliesService.js'

function getAllInOutSupplies(_req, res) {
  inOutSuppliesService.getAllInOutSupplies().then((result) => res.json(result));
}

function getSingleInOutSupplies(req, res, next) {
  const id = (req.params.id);
  inOutSuppliesService.getSingleInOutSupplies(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function updateInOutSupplies(req, res, next) {
  const id = req.params.id;
  const { month, inSupply, outSupply } = req.body
  
  const updatedInOutSupplies = {
    month,
    inSupply, 
    outSupply, 
  };

  inOutSuppliesService.updateInOutSupplies(id, updatedInOutSupplies)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

export default { getAllInOutSupplies, getSingleInOutSupplies, updateInOutSupplies }