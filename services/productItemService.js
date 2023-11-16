import ProductItems from '../models/ProductItems.js'

function getAllProductItems() {
  return ProductItems.find({}).then((result) => result);
}

function createProductItem( { itemCode, brand, genericName, manufacture, expiry, price, description, quantity, type, category } ) {  
  return ProductItems.create(
    {
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
    }).then((createdProductItem) => createdProductItem)
}

function updateProductItem(id, updatedData) {
  return ProductItems.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

function deleteProductItem(id) {
  return ProductItems.findByIdAndDelete(id).then((returnedSatus) => returnedSatus);
}

export default { getAllProductItems, createProductItem, updateProductItem, deleteProductItem }