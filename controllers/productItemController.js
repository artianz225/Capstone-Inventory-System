import productItemService from '../services/productItemService.js';

function getAllProductItems(_req, res) {
  productItemService.getAllProductItems().then((result) => res.json(result));
}

function createProductItem(req, res, next) {
  const body = req.body;
  productItemService.createProductItem(body)
  .then((createProductItem) => res.json(createProductItem))
  .catch((error) => next(error))
}

function updateProductItem(req, res, next) {
  const id = req.params.id;
  const { itemCode, brand, genericName, manufacture, expiry, price, description, quantity, type, category } = req.body
  
  const updatedProduct = {
    itemCode,
    brand, 
    genericName, 
    manufacture,
    expiry, 
    price, 
    description, 
    quantity, 
    type,
    category, 
  };

  productItemService.updateProductItem(id, updatedProduct)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    } 
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

function deleteProductItem(req, res, next) {
  const id = req.params.id;
  productItemService.deleteProductItem(id).then((_status) => res.status(204).end())
  .catch((error) => next(error))
}

export default { getAllProductItems, createProductItem, updateProductItem, deleteProductItem }