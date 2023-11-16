import mongoose from "mongoose";

const productItemsSchema = new mongoose.Schema({
  itemCode: { type: String},
  brand: { type: String},
  genericName: { type: String},
  manufacture: { type: String},
  expiry: { type: String},
  price: { type: String},
  quantity: { type: String},
  type: { type: String},
  category: { type: String},
  description: { type: String},
});

productItemsSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const ProductItems = mongoose.model('ProductItems', productItemsSchema);

export default ProductItems;