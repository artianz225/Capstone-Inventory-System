import supplierService from '../services/supplierService.js';

function getAllSuppliers(_req, res) {
  supplierService.getAllSuppliers().then((result) => res.json(result));
}

function createSuplier(req, res, next) {
  const body = req.body;
  supplierService.createSupplier(body)
  .then((createSupplier) => res.json(createSupplier))
  .catch((error) => next(error))
}

function getSingleSupplier(req, res, next) {
  const id = (req.params.id);
  supplierService.getSingleSupplier(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function updateSupplier(req, res, next) {
  const id = req.params.id;
  const { supplierCode, company, contactPerson, contactNumber, email, address, status, description  } = req.body
  
  const updatedSupplier = {
    supplierCode,
    company, 
    contactPerson, 
    contactNumber,
    email, 
    address, 
    status, 
    description,
  };

  supplierService.updateSupplier(id, updatedSupplier)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

function deleteSupplier(req, res, next) {
  const id = req.params.id;
  supplierService.deleteSupplier(id).then((_status) => res.status(204).end())
  .catch((error) => next(error))
}

export default { getAllSuppliers, createSuplier, getSingleSupplier, updateSupplier, deleteSupplier }