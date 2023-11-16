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

function deleteSupplier(req, res, next) {
  const id = req.params.id;
  supplierService.deleteSupplier(id).then((_status) => res.status(204).end())
  .catch((error) => next(error))
}

export default { getAllSuppliers, createSuplier, deleteSupplier }