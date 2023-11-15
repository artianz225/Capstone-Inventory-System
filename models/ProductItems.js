import mongoose from "mongoose";

const productItemsSchema = new mongoose.Schema({  
   itemCode: String,
   brand: String,
   genericName: String,
   manufacture: String,
   expiry: String,
   price: String,
   description: String,
   type: String,
   category: String
});

productItemsSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;  
  }
})

const productitems = mongoose.model('ProductItems', productItemsSchema);

export default productitems;